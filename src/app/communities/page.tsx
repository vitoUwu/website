import { CommunityCard } from "@/components/CommunityCard";
import communities from "@/lib/communities";
import { Metadata } from "next";

const title = "vitoo | Communities";
const description = `${communities.length} communities I collaborated with or managed`;

export const metadata: Metadata = {
  title,
  description,
  twitter: {
    title,
    description,
  },
  openGraph: {
    title,
    description,
  },
};

export default function Communities() {
  return (
    <main className="flex min-h-screen justify-center items-center mx-3 md:mx-16 my-16">
      <div className="max-w-7xl grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 ">
        {communities.map((community, index) => (
          <CommunityCard
            key={community.name}
            community={community}
            index={index}
          />
        ))}
      </div>
    </main>
  );
}
