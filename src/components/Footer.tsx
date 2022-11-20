import CustomIcon from "./CustomIcon";
import Title from "./Title";

export function Footer() {
  return (
    <footer>
				<Title>Contato</Title>
				<div>
					<ul className="flex flex-col justify-start gap-1">
						<li className="cursor-pointer w-fit">
							<a
								href="mailto:victorhugomeurerdelgrandi@gmail.com"
								target={"_blank"}
								className="flex gap-1"
							>
								<CustomIcon name="email" />
								<p>Email</p>
							</a>
						</li>
						<li className="cursor-pointer w-fit">
							<a
								href="https://github.com/vitoUwu"
								target={"_blank"}
								className="flex gap-1"
							>
								<CustomIcon name="github" />
								<p>GitHub</p>
							</a>
						</li>
						<li className="cursor-pointer w-fit">
							<a
								href="https://twitter.com/vitoodev"
								target={"_blank"}
								className="flex gap-1"
							>
								<CustomIcon name="twitter" />
								<p>Twitter</p>
							</a>
						</li>
						<li className="cursor-pointer w-fit">
							<a
								href="https://www.linkedin.com/in/vitoo/"
								target={"_blank"}
								className="flex gap-1"
							>
								<CustomIcon name="linkedin" />
								<p>LinkedIn</p>
							</a>
						</li>
					</ul>
				</div>
			</footer>
  )
}