import { Operations, type Payload, type User } from "~/types";

export default function useLanyard(userId: string) {
  const ws = ref<WebSocket | null>(null);
  const heartbeatInterval = ref<NodeJS.Timeout | null>(null);
  const data = ref<User | null>(null);

  const sendPayload = (payload: Payload) => {
    ws.value?.send(JSON.stringify(payload));
  };

  const connect = () => {
    if (ws.value && ws.value.readyState === WebSocket.OPEN) {
      console.warn("Already connected to Lanyard.");
      return;
    }

    ws.value = new WebSocket("wss://api.lanyard.rest/socket");

    ws.value.onclose = (event) => {
      console.error("Connection closed with code", event.code);
      disconnect();
    };

    ws.value.onmessage = (event) => {
      const payload = parseData(event.data);
      if (!payload) return;

      switch (payload.op) {
        case Operations.Event:
          if (isInitStateEventPayload(payload)) {
            const user = Object.values(payload.d)[0];
            data.value = user;
            return;
          }

          if (isPresenceUpdateEventPayload(payload)) {
            data.value = payload.d;
            return;
          }

          console.error("Received unknown event payload.", payload);
          break;
        case Operations.Hello:
          setInterval(() => {
            sendPayload(createHeartbeatPayload());
          }, payload.d.heartbeat_interval);

          sendPayload(createInitializePayload(userId));
          break;
        case Operations.Initialize: // We should not be receiving these payloads, so we ignore them.
        case Operations.Heartbeat:
          break;
        default:
          console.error("Received unknown payload.", payload);
      }
    };
  };

  const disconnect = () => {
    if (heartbeatInterval.value) {
      clearInterval(heartbeatInterval.value);
    }
    ws.value?.close();
  };

  return {
    connect,
    disconnect,
    data,
  };
}
