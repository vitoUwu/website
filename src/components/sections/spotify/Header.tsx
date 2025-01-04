interface Props {
  songName: string;
  songArtist: string;
  trackId: string;
}

export default function Header({ songName, songArtist, trackId }: Props) {
  return (
    <a
      href={`https://open.spotify.com/track/${trackId}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="font-newsreader underline">{songName}</span>
      <span className="text-neutral-500 text-xs"> by </span>
      <span className="font-newsreader underline">{songArtist}</span>
    </a>
  );
}
