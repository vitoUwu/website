import { useRef, useState } from "react";

enum Operations {
  Event = 0,
  Hello = 1,
  Initialize = 2,
  Heartbeat = 3,
}

enum EventType {
  InitState = "INIT_STATE",
  PresenceUpdate = "PRESENCE_UPDATE",
}

interface SpotifyData {
  track_id: string;
  timestamps: {
    start: number;
    end: number;
  };
  album: string;
  album_art_url: string;
  artist: string;
  song: string;
}

interface ActivityData {
  flags: number;
  id: string;
  name: string;
  type: number;
  state: string;
  session_id: string;
  details: string;
  timestamps: {
    start: number;
    end: number;
  };
  assets: {
    large_image: string;
    large_text: string;
  };
  sync_id: string;
  created_at: number;
}

interface DiscordUser {
  id: string;
  username: string;
  avatar: string;
  discriminator: string;
  bot: boolean;
  clan: string | null;
  global_name: string | null;
  avatar_decoration_data: string | null;
  display_name: string | null;
  public_flags: number;
}

interface User {
  kv: Record<string, string>;
  spotify: SpotifyData | null;
  discord_user: DiscordUser;
  activities: ActivityData[];
  discord_status: string;
  active_on_discord_web: boolean;
  active_on_discord_desktop: boolean;
  active_on_discord_mobile: boolean;
  listening_to_spotify: boolean;
}

const MAX_RETRIES = 5;

const logger = {
  log: (...args: any[]) => {
    console.log("[Lanyard]", ...args);
  },
  error: (...args: any[]) => {
    console.error("[Lanyard]", ...args);
  },
  warn: (...args: any[]) => {
    console.warn("[Lanyard]", ...args);
  },
};

interface EventPayload {
  op: Operations.Event;
  t: string;
  d: Record<string, unknown>;
}

interface HelloPayload {
  op: Operations.Hello;
  d: {
    heartbeat_interval: number;
  };
}

interface InitializePayload {
  op: Operations.Initialize;
  d: {
    subscribe_to_ids: string[];
  };
}

interface HeartBeatPayload {
  op: Operations.Heartbeat;
}

interface InitStateEventPayload extends Omit<EventPayload, "d"> {
  d: Record<string, User>;
}

interface PresenceUpdateEventPayload extends Omit<EventPayload, "d"> {
  d: User;
}

type Payload =
  | HelloPayload
  | HeartBeatPayload
  | InitializePayload
  | EventPayload
  | InitStateEventPayload
  | PresenceUpdateEventPayload;

function parseData(data: string): null | Payload {
  try {
    const json = JSON.parse(data);

    if (
      typeof json === "object" &&
      !Array.isArray(json) &&
      Boolean(json) &&
      "op" in json &&
      typeof json.op === "number"
    ) {
      return json;
    }

    return null;
  } catch (err) {
    console.error("Failed to parse JSON data", err);
    return null;
  }
}

function createInitializePayload(userId: string | string[]): InitializePayload {
  return {
    op: Operations.Initialize,
    d: {
      subscribe_to_ids: Array.isArray(userId) ? userId : [userId],
    },
  };
}

function createHeartbeatPayload(): HeartBeatPayload {
  return { op: Operations.Heartbeat };
}

function isInitStateEventPayload(
  payload: Payload
): payload is InitStateEventPayload {
  return payload.op === Operations.Event && payload.t === EventType.InitState;
}

function isPresenceUpdateEventPayload(
  payload: Payload
): payload is PresenceUpdateEventPayload {
  return (
    payload.op === Operations.Event && payload.t === EventType.PresenceUpdate
  );
}

export default function useLanyard(userId: string) {
  const ws = useRef<WebSocket | null>(null);
  const heartbeatInterval = useRef<NodeJS.Timeout | null>(null);
  const retries = useRef(0);
  const [data, setData] = useState<User | null>(null);
  const [state, setState] = useState<
    "connecting" | "connected" | "disconnected"
  >("disconnected");

  function sendPayload(payload: Payload) {
    ws.current?.send(JSON.stringify(payload));
  }

  function onClose(event: CloseEvent) {
    setState("disconnected");
    logger.error("Connection closed", {
      code: event.code,
      reason: event.reason,
    });

    // globalThis.window.dataLayer?.push({
    //   event: "lanyard_disconnected",
    //   lanyard: {
    //     code: event.code,
    //     reason: event.reason,
    //   },
    // });

    disconnect();

    if (retries.current >= MAX_RETRIES) {
      logger.error(`Failed to reconnect after ${MAX_RETRIES} attempts.`);
      // globalThis.window.dataLayer?.push({
      //   event: "lanyard_failed_to_reconnect",
      //   lanyard: {
      //     retries: MAX_RETRIES,
      //   },
      // });
      return;
    }
    logger.log("Reconnecting in 5 seconds...");
    setTimeout(() => {
      setState("connecting");
      retries.current++;
      connect();
    }, 5000);
  }

  function onOpen() {
    logger.log("Connected to the server.");
    setState("connected");
  }

  function onError(event: Event) {
    logger.error("Connection error.", event);
    disconnect();
  }

  function onMessage(event: MessageEvent) {
    const payload = parseData(event.data);
    if (!payload) return;

    switch (payload.op) {
      case Operations.Event:
        retries.current = 0; // I don't know if this is the best place to reset the retries, but it should work.

        if (isInitStateEventPayload(payload)) {
          logger.log("Connected to the server.");
          const user = Object.values(payload.d)[0];

          // globalThis.window.dataLayer?.push({
          //   event: "lanyard_connected",
          //   lanyard: {
          //     spotify: user.spotify,
          //   },
          // });

          setData(user);
          return;
        }

        if (isPresenceUpdateEventPayload(payload)) {
          const user = payload.d;

          // globalThis.window.dataLayer?.push({
          //   event: "lanyard_presence_update",
          //   lanyard: {
          //     spotify: user.spotify,
          //   },
          // });

          setData(user);
          return;
        }

        logger.error("Received unknown event payload.", payload);
        break;
      case Operations.Hello:
        heartbeatInterval.current = setInterval(() => {
          sendPayload(createHeartbeatPayload());
        }, payload.d.heartbeat_interval);

        sendPayload(createInitializePayload(userId));
        break;
      case Operations.Initialize: // We should not be receiving these payloads, so we ignore them.
      case Operations.Heartbeat:
        break;
      default:
        logger.error("Received unknown payload.", payload);
    }
  }

  function connect() {
    if (ws.current && ws.current.readyState === WebSocket.OPEN) {
      logger.warn("Already connected to Lanyard.");
      return;
    }

    setState("connecting");

    ws.current = new WebSocket("wss://api.lanyard.rest/socket");

    ws.current.addEventListener("close", onClose);
    ws.current.addEventListener("open", onOpen);
    ws.current.addEventListener("error", onError);
    ws.current.addEventListener("message", onMessage);
  }

  function disconnect() {
    if (heartbeatInterval.current) {
      clearInterval(heartbeatInterval.current);
    }

    setData(null);
    ws.current?.close();
    ws.current?.removeEventListener("close", onClose);
    ws.current?.removeEventListener("open", onOpen);
    ws.current?.removeEventListener("error", onError);
    ws.current?.removeEventListener("message", onMessage);
  }

  return {
    connect,
    disconnect,
    data,
    state,
  };
}
