interface Props {
  thumbnailURL: string;
}

export default function Thumbnail({ thumbnailURL }: Props) {
  const url = thumbnailURL.startsWith("spotify:")
    ? thumbnailURL.replace("spotify:", "https://i.scdn.co/image/")
    : thumbnailURL.startsWith("mp:external/")
    ? `https://${thumbnailURL.split("https/")[1]}`
    : thumbnailURL;

  return (
    <div className="size-16 relative shrink-0">
      <img
        className="aspect-square size-full absolute inset-0 object-cover blur-md -z-[1]"
        src={url}
        alt="album art"
        loading="lazy"
        referrerPolicy="no-referrer"
      />
      <img
        className="aspect-square size-full"
        src={url}
        alt="album art"
        loading="lazy"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
