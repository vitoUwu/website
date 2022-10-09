import CustomIcon, { IconNames } from "./CustomIcon"
import * as Tooltip from '@radix-ui/react-tooltip';

interface CardTechnologiesProps {
	technologies: string[],
	className?: string,
}

export default function CardTechnologies({ technologies, className }: CardTechnologiesProps) {
	return (
		<div className={`flex gap-1 ${className}`}>
			{
				technologies.map(technology => {
					return (
						<Tooltip.Provider key={technology}>
							<Tooltip.Root>
								<Tooltip.Trigger>
									<CustomIcon name={technology as IconNames} />
								</Tooltip.Trigger>
								<Tooltip.Portal>
									<Tooltip.Content sideOffset={5} className="capitalize text-zinc-600 dark:text-zinc-400">
										{technology}
									</Tooltip.Content>
								</Tooltip.Portal>
							</Tooltip.Root>
						</Tooltip.Provider>
					)
				})
			}
		</div>
	)
}