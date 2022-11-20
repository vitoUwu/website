import Title from "../components/Title";
import Card from "../components/Card";
import { COMMUNITIES } from "../assets/constants";
import { motion } from 'framer-motion';

interface Community {
	name: string;
	detail: string;
	description: string;
	url: string;
}

export function Communities() {
	return (
		<motion.div
			initial={{
				y: "-10%",
				opacity: 0
			}}
			animate={{
				y: "0",
				opacity: 100
			}}
			viewport={{
				once: true
			}}
		>
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
		</motion.div>
	);
}
