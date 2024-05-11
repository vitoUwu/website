export enum Operations {
  Event = 0,
  Hello = 1,
  Initialize = 2,
  Heartbeat = 3,
}

export enum EventType {
  InitState = "INIT_STATE",
  PresenceUpdate = "PRESENCE_UPDATE",
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

export interface User {
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

export interface EventPayload {
  op: Operations.Event;
  t: string;
  d: Record<string, unknown>;
}

export interface HelloPayload {
  op: Operations.Hello;
  d: {
    heartbeat_interval: number;
  };
}

export interface InitializePayload {
  op: Operations.Initialize;
  d: {
    subscribe_to_ids: string[];
  };
}

export interface HeartBeatPayload {
  op: Operations.Heartbeat;
}

export interface InitStateEventPayload extends Omit<EventPayload, "d"> {
  d: Record<string, User>;
}

export interface PresenceUpdateEventPayload extends Omit<EventPayload, "d"> {
  d: User;
}

export type Payload =
  | HelloPayload
  | HeartBeatPayload
  | InitializePayload
  | EventPayload
  | InitStateEventPayload
  | PresenceUpdateEventPayload;
