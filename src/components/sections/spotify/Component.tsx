"use client";

import useLanyard from "@/hooks/useLanyard";
import { AnimatePresence, motion } from "motion/react";
import { HTMLMotionProps } from "motion/react";
import { useEffect, useState } from "react";
import Header from "./Header";
import Thumbnail from "./Thumbnail";
import Timeline from "./Timeline";
import { sendGTMEvent } from "@next/third-parties/google";

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
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);

  useEffect(() => {
    connect();

    return () => {
      disconnect();
    };
  }, []);

  useEffect(() => {
    if (!data?.spotify) {
      setStart(0);
      setEnd(0);
      return;
    }

    setStart(Math.floor((Date.now() - data.spotify.timestamps.start) / 1000));
    setEnd(
      Math.floor(
        (data.spotify.timestamps.end - data.spotify.timestamps.start) / 1000
      )
    );

    sendGTMEvent({
      event: "spotify_event",
      data: {
        song: data.spotify.song,
        artist: data.spotify.artist,
        trackId: data.spotify.track_id,
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
        ) : !data?.spotify ? (
          <Nothing />
        ) : (
          <InOutDiv
            id={data.spotify.track_id}
            key={data.spotify.track_id}
            className="flex items-center gap-3 w-full"
          >
            <Thumbnail thumbnailURL={data.spotify.album_art_url} />
            <div className="w-full">
              <Header
                songName={data.spotify.song}
                songArtist={data.spotify.artist}
                trackId={data.spotify.track_id}
              />
              <Timeline start={start} end={end} />
            </div>
          </InOutDiv>
        )}
      </AnimatePresence>
    </div>
  );
}
