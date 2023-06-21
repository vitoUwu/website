import { motion } from "framer-motion";
import { COMMUNITIES } from "../assets/constants";
import Title from "../components/Title";
import Card from "../components/card";

interface Community {
  name: string;
  role: string;
  description: string;
  url?: string;
}

export function Communities() {
  return (
    <motion.div
      initial={{
        y: "-2%",
        opacity: 0,
      }}
      animate={{
        y: "0",
        opacity: 100,
      }}
      viewport={{
        once: true,
      }}
    >
      <section id="communities">
        <Title>Comunidades</Title>
        <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
          {COMMUNITIES.sort((community) =>
            community.role.toLowerCase() === "ex dev" ? 1 : -1
          ).map((community: Community) => {
            return (
              <Card
                key={`${community.name}-${community.role}`}
                title={community.name}
                description={community.description}
                subtitle={community.role}
                url={community.url}
              />
            );
          })}
        </div>
      </section>
    </motion.div>
  );
}
