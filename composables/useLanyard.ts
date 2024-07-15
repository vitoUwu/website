import { Operations, type Payload, type User } from "~/types";

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

export default function useLanyard(userId: string) {
  const ws = ref<WebSocket | null>(null);
  const heartbeatInterval = ref<NodeJS.Timeout | null>(null);
  const data = ref<User | null>(null);
  const retries = ref(0);

  const sendPayload = (payload: Payload) => {
    ws.value?.send(JSON.stringify(payload));
  };

  const connect = () => {
    if (ws.value && ws.value.readyState === WebSocket.OPEN) {
      logger.warn("Already connected to Lanyard.");
      return;
    }

    ws.value = new WebSocket("wss://api.lanyard.rest/socket");

    ws.value.onclose = (event) => {
      logger.error("Connection closed", {
        code: event.code,
        reason: event.reason,
      });

      globalThis.window.dataLayer?.push({
        event: "lanyard_disconnected",
        lanyard: {
          code: event.code,
          reason: event.reason,
        },
      });

      disconnect();

      if (retries.value >= MAX_RETRIES) {
        logger.error(`Failed to reconnect after ${MAX_RETRIES} attempts.`);
        globalThis.window.dataLayer?.push({
          event: "lanyard_failed_to_reconnect",
          lanyard: {
            retries: MAX_RETRIES,
          },
        });
        return;
      }
      logger.log("Reconnecting in 5 seconds...");
      setTimeout(() => {
        retries.value++;
        connect();
      }, 5000);
    };

    ws.value.onerror = (event) => {
      logger.error("Connection error.", event);
      disconnect();
    };

    ws.value.onmessage = (event) => {
      const payload = parseData(event.data);
      if (!payload) return;

      switch (payload.op) {
        case Operations.Event:
          retries.value = 0; // I don't know if this is the best place to reset the retries, but it should work.

          if (isInitStateEventPayload(payload)) {
            logger.log("Connected to the server.");
            const user = Object.values(payload.d)[0];

            globalThis.window.dataLayer?.push({
              event: "lanyard_connected",
              lanyard: {
                spotify: user.spotify,
              },
            });

            data.value = user;
            return;
          }

          if (isPresenceUpdateEventPayload(payload)) {
            const user = payload.d;

            globalThis.window.dataLayer?.push({
              event: "lanyard_presence_update",
              lanyard: {
                spotify: user.spotify,
              },
            });

            data.value = user;
            return;
          }

          logger.error("Received unknown event payload.", payload);
          break;
        case Operations.Hello:
          heartbeatInterval.value = setInterval(() => {
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
    };
  };

  const disconnect = () => {
    if (heartbeatInterval.value) {
      clearInterval(heartbeatInterval.value);
    }
    data.value = null;
    ws.value?.close();
  };

  return {
    connect,
    disconnect,
    data,
  };
}
