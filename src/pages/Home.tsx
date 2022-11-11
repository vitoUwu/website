import Title from "../components/Title";
import Card from "../components/Card";
import CustomIcon, { IconNames } from "../components/CustomIcon";
import { COMMUNITIES, CONTRIBUITIONS, PROJECTS } from "../assets/constants";
import Button from "../components/Button";
import { Icon } from "@mdi/react";
import { mdiWeatherNight, mdiWeatherSunny } from "@mdi/js";
import { useEffect, useState } from "react";

interface Community {
	name: string;
	detail: string;
	description: string;
	url: string;
}

interface Project {
	name: string;
	detail?: string;
	description: string;
	url?: string;
	repoUrl?: string;
	technologies?: string[];
}

type Themes = "dark" | "light";

export default function Home() {
	const [theme, setTheme] = useState<Themes>((localStorage.getItem("theme") as Themes) || "light");

	useEffect(() => {
		localStorage.setItem("theme", theme);
		document.documentElement.classList[theme === "dark" ? "add" : "remove"]("dark");
	}, [theme]);

	function handleToggleTheme() {
		setTheme((theme) => (theme === "dark" ? "light" : "dark"));
	}

	return (
		<div className="transition-colors p-4 md:p-10 select-none dark:bg-zinc-900">
			<header className="flex justify-between">
				<h1 className="text-7xl md:text-8xl font-bold mb-5 dark:text-zinc-300 text-zinc-800">
					Olá, sou o<br />
					Vitoo.
				</h1>
				<div className="flex justify-end items-start">
					<Button onClick={handleToggleTheme}>
						<Icon path={mdiWeatherSunny} size={1} className="text-zinc-400 dark:block hidden" />
						<Icon path={mdiWeatherNight} size={1} className="text-zinc-400 block dark:hidden" />
					</Button>
				</div>
			</header>
			<div className="transition-colors bg-zinc-100 border-2 border-zinc-200 dark:border-zinc-800 dark:bg-zinc-900 rounded text-zinc-600 dark:text-zinc-400 p-4 md:p-10 shadow-2xl text-base">
				<h1>
					Um jovem que quer aprender e explorar esse novo mundo tecnológico. Gosto de Front-End e tenho um lado artístico, porém também sinto vontade
					de aprender a desenvolver Back-Ends e APIs. Gerencio algumas comunidades pelo Discord e também desenvolvo aplicações para facilitar a
					administração dessas comunidades.
				</h1>
				<section id='skills'>
					<Title>skills</Title>
					<ul className="flex flex-wrap justify-center">
						<li className="flex gap-1 py-1 px-2">
							<CustomIcon name="tailwind" />
							Tailwind
						</li>
						<li className="flex gap-1 py-1 px-2">
							<CustomIcon name="nodejs" />
							Node.js
						</li>
						<li className="flex gap-1 py-1 px-2">
							<CustomIcon name="python" />
							Python
						</li>
						<li className="flex gap-1 py-1 px-2">
							<CustomIcon name="javascript" />
							JavaScript
						</li>
						<li className="flex gap-1 py-1 px-2">
							<CustomIcon name="typescript" />
							TypeScript
						</li>
						<li className="flex gap-1 py-1 px-2">
							<CustomIcon name="react" />
							React
						</li>
						<li className="flex gap-1 py-1 px-2">
							<CustomIcon name="vuejs" />
							Vue.js
						</li>
						<li className="flex gap-1 py-1 px-2">
							<CustomIcon name="discord" />
							Discord.js
						</li>
						<li className="flex gap-1 py-1 px-2">
							<CustomIcon name="prisma" />
							Prisma
						</li>
						<li className="flex gap-1 py-1 px-2">
							<CustomIcon name="mongodb" />
							MongoDB
						</li>
					</ul>
				</section>
				<section id='projects'>
					<Title>Projetos</Title>
					<div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
						{PROJECTS.map((project: Project) => {
							return (
								<Card
									key={`${project.name}-${project.detail}`}
									title={project.name}
									description={project.description}
									detail={project.detail}
									url={project.url}
									repoUrl={project.repoUrl}
									technologies={project.technologies}
								/>
							);
						})}
					</div>
				</section>
				<section id="contribuitions">
				<Title>Contribuições</Title>
					<div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
						{CONTRIBUITIONS.map((contribuition: Project) => {
							return (
								<Card
									key={`${contribuition.name}-${contribuition.detail}`}
									title={contribuition.name}
									description={contribuition.description}
									detail={contribuition.detail}
									url={contribuition.url}
									repoUrl={contribuition.repoUrl}
									technologies={contribuition.technologies}
								/>
							);
						})}
					</div>
				</section>
				<section id='communities'>
					<Title>Comunidades</Title>
					<div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
						{COMMUNITIES.map((community: Community) => {
							return (
								<Card
									key={`${community.name}-${community.detail}`}
									title={community.name}
									description={community.description}
									detail={community.detail}
									url={community.url}
								/>
							);
						})}
					</div>
				</section>
				<footer>
					<Title>Contato</Title>
					<div>
						<ul className="flex flex-col justify-start gap-1">
							<li className="cursor-pointer w-fit">
								<a href="mailto:victorhugomeurerdelgrandi@gmail.com" target={'_blank'} className="flex gap-1">
									<CustomIcon name="email" />
									<p>Email</p>
								</a>
							</li>
							<li className="cursor-pointer w-fit">
								<a href="https://github.com/vitoUwu" target={'_blank'} className="flex gap-1">
									<CustomIcon name="github" />
									<p>GitHub</p>
								</a>
							</li>
							<li className="cursor-pointer w-fit">
								<a href="https://twitter.com/vitoodev" target={'_blank'} className="flex gap-1">
									<CustomIcon name="twitter" />
									<p>Twitter</p>
								</a>
							</li>
							<li className="cursor-pointer w-fit">
								<a href="https://www.linkedin.com/in/vitoo/" target={'_blank'} className="flex gap-1">
									<CustomIcon name="linkedin" />
									<p>LinkedIn</p>
								</a>
							</li>
						</ul>
					</div>
				</footer>
			</div>
		</div>
	);
}
