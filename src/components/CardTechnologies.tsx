import CustomIcon, { IconNames } from "./CustomIcon"
import * as Tooltip from '@radix-ui/react-tooltip';

interface CardTechnologiesProps {
	technologies: string[],
	className?: string,
}

export default function CardTechnologies({ technologies, className }: CardTechnologiesProps) {
	return (
		<div className={`flex flex-wrap justify-end gap-1 ${className}`}>
			{
				technologies.map(technology => {
					return (
						<Tooltip.Provider key={technology}>
							<Tooltip.Root>
								<Tooltip.Trigger aria-label={technology}>
									<CustomIcon name={technology as IconNames} />
								</Tooltip.Trigger>
								<Tooltip.Portal>
									<Tooltip.Content sideOffset={5} className="capitalize text-zinc-600 dark:text-zinc-400">
										<div className="bg-zinc-100 border-2 px-1 py-[2px] dark:border-zinc-800 dark:bg-zinc-900 rounded">
											{technology}
										</div>
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