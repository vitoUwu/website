import Title from "../components/Title";
import CustomIcon from "../components/CustomIcon";
import { motion } from 'framer-motion';
import { Footer } from "../components/Footer";
import { Item } from "../components/List/Item";
import { CenterList } from "../components/List/CenterList";
import { Link } from "../components/Link";


export function Home() {
	return (
		<motion.div
			initial={{
        opacity: 0,
        y: "-10%"
      }}
			animate={{
        opacity: 100,
        y: "0"
      }}
      viewport={{
        once: true
      }}
		>
			<h1>
				Um jovem que quer aprender e explorar esse novo mundo tecnológico. Gosto
				de Front-End e tenho um lado artístico, porém também sinto von detade
				aprender a desenvolver Back-Ends e APIs. Gerencio algumas comunidades
				pelo Discord e também desenvolvo aplicações para facilitar a
				administração dessas comunidades.
			</h1>
			<section id='skills'>
				<Title>skills</Title>
				<CenterList>
					<Item>
						<CustomIcon name="tailwind" /> Tailwind
					</Item>
					<Item>
						<CustomIcon name="nodejs" /> Node.js
					</Item>
					<Item>
						<CustomIcon name="python" /> Python
					</Item>
					<Item>
						<CustomIcon name="javascript" /> JavaScript
					</Item>
					<Item>
						<CustomIcon name="typescript" /> TypeScript
					</Item>
					<Item>
						<CustomIcon name="react" /> React
					</Item>
					<Item>
						<CustomIcon name="vuejs" /> Vue.js
					</Item>
					<Item>
						<CustomIcon name="discord" /> Discord.js
					</Item>
					<Item>
						<CustomIcon name="prisma" /> Prisma
					</Item>
					<Item>
						<CustomIcon name="mongodb" /> MongoDB
					</Item>
				</CenterList>
			</section>
      <section>
        <Title>Conexões</Title>
        <CenterList>
					<Item>
            <Link href="https://anilist.co/user/viitoo/">
              <CustomIcon name="anilist" /> Anilist
            </Link>
					</Item>
					<Item>
            <Link href="https://open.spotify.com/user/victorhugomeurer">
              <CustomIcon name="spotify" /> Spotify
            </Link>
					</Item>
					<Item>
            <Link href="https://www.last.fm/pt/user/vitoUwu">
              <CustomIcon name="music" /> Last FM
            </Link>
					</Item>
				</CenterList>
      </section>
      <Footer/>
		</motion.div>
	);
}
