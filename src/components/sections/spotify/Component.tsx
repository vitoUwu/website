"use client";

import useLanyard, { ActivityData } from "@/hooks/useLanyard";
import { sendGTMEvent } from "@next/third-parties/google";
import { AnimatePresence, HTMLMotionProps, motion } from "motion/react";
import { useEffect, useState } from "react";
import Header from "./Header";
import Thumbnail from "./Thumbnail";
import Timeline from "./Timeline";

function InOutDiv(
  props: React.HTMLAttributes<HTMLDivElement> & HTMLMotionProps<"div">
) {
  return (
    <motion.div
      exit={{
        opacity: 0,
        position: "absolute",
        transform: "translateY(-32px)",
      }}
      initial={{ opacity: 0, transform: "translateY(32px)" }}
      animate={{ opacity: 1, transform: "translateY(0)" }}
      {...props}
    />
  );
}

function Disconnected() {
  return (
    <InOutDiv>
      <p>disconnected</p>
    </InOutDiv>
  );
}

function Loading() {
  return (
    <InOutDiv>
      <p>loading...</p>
    </InOutDiv>
  );
}

function Nothing() {
  return (
    <InOutDiv className="flex items-center gap-3 w-full">
      <div className="w-full">
        <p className="font-newsreader underline">nothing</p>
        <Timeline start={0} end={0} />
      </div>
    </InOutDiv>
  );
}

export default function Component() {
  const { connect, disconnect, data, state } = useLanyard("504717946124369937");
  const [activity, setActivity] = useState<ActivityData | null>(null);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);

  useEffect(() => {
    connect();

    return () => {
      disconnect();
    };
  }, []);

  useEffect(() => {
    const newActivity =
      data?.activities.find(
        (activity) =>
          activity.name === "YouTube Music" || activity.name === "Spotify"
      ) || null;

    if (!newActivity) {
      setStart(0);
      setEnd(0);
      setActivity(null);
      return;
    }

    setStart(Math.floor((Date.now() - newActivity.timestamps.start) / 1000));
    setEnd(
      Math.floor(
        (newActivity.timestamps.end - newActivity.timestamps.start) / 1000
      )
    );
    setActivity(newActivity);

    sendGTMEvent({
      event: "spotify_event",
      data: {
        song: newActivity.details,
        artist: newActivity.state,
        trackId: newActivity.sync_id,
      },
    });
  }, [data]);

  return (
    <div className="relative">
      <AnimatePresence>
        {state === "disconnected" ? (
          <Disconnected />
        ) : state === "connecting" ? (
          <Loading />
        ) : !activity ? (
          <Nothing />
        ) : (
          <InOutDiv
            id={activity.sync_id}
            key={activity.sync_id}
            className="flex items-center gap-3 w-full"
          >
            <Thumbnail
              key={activity.sync_id}
              thumbnailURL={activity.assets.large_image}
            />
            <div className="w-full">
              <Header
                songName={activity.details}
                songArtist={activity.state}
                trackId={activity.sync_id}
              />
              <Timeline start={start} end={end} />
            </div>
          </InOutDiv>
        )}
      </AnimatePresence>
    </div>
  );
}
