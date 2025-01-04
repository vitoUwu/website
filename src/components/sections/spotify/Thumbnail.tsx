interface Props {
  thumbnailURL: string;
}

export default function Thumbnail({ thumbnailURL }: Props) {
  return (
    <div className="size-16 relative shrink-0">
      <img
        className="aspect-square size-full absolute inset-0 object-cover blur-md -z-[1]"
        src={thumbnailURL}
        alt="album art"
        loading="lazy"
      />
      <img
        className="aspect-square size-full"
        src={thumbnailURL}
        alt="album art"
        loading="lazy"
      />
    </div>
  );
}
