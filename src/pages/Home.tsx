import Title from "../components/Title";
import Card from "../components/Card";
import CustomIcon from "../components/CustomIcon";
import { COMMUNITIES, PROJECTS } from "../assets/constants";

interface Community {
	name: string,
	detail: string,
	description: string,
	url: string,
}

interface Project {
	name: string,
	detail?: string,
	description: string,
	url?: string,
	repositoryUrl?: string
}

export default function Home() {

	return (
		<div className="p-4 md:p-10 select-none">
			<header>
				<h1 className="text-8xl font-bold mb-5 text-zinc-800">Olá, sou o<br/>Vitoo.</h1>
			</header>
			<div className="bg-zinc-100 rounded text-zinc-600 p-4 md:p-10 shadow-2xl text-base">
				<h1>Um jovem que quer aprender e explorar esse novo mundo tecnológico. Gosto de Front-End e tenho um lado artístico,
					porém também sinto vontade de aprender a desenvolver Back-Ends e APIs. Gerencio algumas comunidades pelo Discord e
					também desenvolvo aplicações para facilitar a administração dessas comunidades.
				</h1>
				<section>
					<Title>skills</Title>
					<ul className="flex flex-wrap justify-center">
						<li className="flex gap-1 py-1 px-2"><CustomIcon name="tailwind"/>Tailwind</li>
						<li className="flex gap-1 py-1 px-2"><CustomIcon name="nodejs"/>Node.js</li>
						<li className="flex gap-1 py-1 px-2"><CustomIcon name="python"/>Python</li>
						<li className="flex gap-1 py-1 px-2"><CustomIcon name="javascript"/>JavaScript</li>
						<li className="flex gap-1 py-1 px-2"><CustomIcon name="typescript"/>TypeScript</li>
						<li className="flex gap-1 py-1 px-2"><CustomIcon name="react"/>React</li>
						<li className="flex gap-1 py-1 px-2"><CustomIcon name="vuejs"/>Vue.js</li>
						<li className="flex gap-1 py-1 px-2"><CustomIcon name="discord"/>Discord.js</li>
						<li className="flex gap-1 py-1 px-2"><CustomIcon name="prisma"/>Prisma</li>
						<li className="flex gap-1 py-1 px-2"><CustomIcon name="mongodb"/>MongoDB</li>
					</ul>
				</section>
				<section>
					<Title>Projetos</Title>
					<div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
						{
							PROJECTS.map((project: Project) => {
								return (
									<Card
										title={project.name}
										description={project.description}
										detail={project.detail}
										url={project.url}
										repositoryUrl={project.repositoryUrl}
									/>
								)
							})
						}
					</div>
				</section>
				<section>
					<Title>Comunidades</Title>
					<div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
						{
							COMMUNITIES.map((community: Community) => {
								return (
									<Card
										title={community.name}
										description={community.description}
										detail={community.detail}
										url={community.url}
									/>
								)
							})
						}
					</div>
				</section>
				<section>
					<Title>Contato</Title>
					<div>
						<ul className="flex flex-col justify-start gap-1">
							<li className="flex gap-1"><CustomIcon name="email"/>Email</li>
							<li className="flex gap-1"><CustomIcon name="github"/>GitHub</li>
							<li className="flex gap-1"><CustomIcon name="twitter"/>Twitter</li>
						</ul>
					</div>
				</section>
			</div>
		</div>
	)
}