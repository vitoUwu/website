import {
  EventType,
  Operations,
  type HeartBeatPayload,
  type InitStateEventPayload,
  type InitializePayload,
  type Payload,
  type PresenceUpdateEventPayload,
} from "~/types";

export function parseData(data: string): null | Payload {
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

export function createInitializePayload(
  userId: string | string[],
): InitializePayload {
  return {
    op: Operations.Initialize,
    d: {
      subscribe_to_ids: Array.isArray(userId) ? userId : [userId],
    },
  };
}

export function createHeartbeatPayload(): HeartBeatPayload {
  return { op: Operations.Heartbeat };
}

export function isInitStateEventPayload(
  payload: Payload,
): payload is InitStateEventPayload {
  return payload.op === Operations.Event && payload.t === EventType.InitState;
}

export function isPresenceUpdateEventPayload(
  payload: Payload,
): payload is PresenceUpdateEventPayload {
  return (
    payload.op === Operations.Event && payload.t === EventType.PresenceUpdate
  );
}
