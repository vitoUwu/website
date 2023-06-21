import { motion } from "framer-motion";
import { ReactNode } from "react";
import { Connections } from "../components/Connections";
import { Contacts } from "../components/Contact";
import Title from "../components/Title";
import CustomIcon from "../components/icons/CustomIcon";

function Cell({ children }: { children: ReactNode }) {
  return <div className="flex gap-1">{children}</div>;
}

export function Home() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: "-2%",
      }}
      animate={{
        opacity: 100,
        y: "0",
      }}
      viewport={{
        once: true,
      }}
    >
      <h1>
        Estudante de Engenharia de Software com interesse pela área de
        desenvolvimento web e mobile. Tenho gosto por Front-End e interesse em
        Back-Ends e APIs. Gerencio comunidades do Discord e desenvolvo
        ferramentas para facilitar a administração dessas comunidades.
      </h1>
      <section id="skills" className="text-center">
        <Title>skills</Title>
        <div className="flex gap-3 flex-wrap justify-center">
          <Cell>
            <CustomIcon name="react" /> React
          </Cell>
          <Cell>
            <CustomIcon name="nextjs" /> Next.js
          </Cell>
          <Cell>
            <CustomIcon name="typescript" /> TypeScript
          </Cell>
          <Cell>
            <CustomIcon name="flutter" /> Flutter
          </Cell>
          <Cell>
            <CustomIcon name="tailwind" /> Tailwind
          </Cell>
          <Cell>
            <CustomIcon name="nodejs" /> Node.js
          </Cell>
          <Cell>
            <CustomIcon name="python" /> Python
          </Cell>
          <Cell>
            <CustomIcon name="javascript" /> JavaScript
          </Cell>
          <Cell>
            <CustomIcon name="vuejs" /> Vue.js
          </Cell>
          <Cell>
            <CustomIcon name="discord" /> Discord.js
          </Cell>
          <Cell>
            <CustomIcon name="prisma" /> Prisma
          </Cell>
          <Cell>
            <CustomIcon name="mongodb" /> MongoDB
          </Cell>
          <Cell>
            <CustomIcon name="golang" /> Golang
          </Cell>
        </div>
      </section>
      <div className="flex justify-center flex-col lg:flex-row lg:gap-10">
        <Connections />
        <Contacts />
      </div>
    </motion.div>
  );
}
