import {
	mdiAlert,
	mdiLanguageJavascript,
	mdiLanguagePython,
	mdiLanguageTypescript,
	mdiNodejs,
	mdiReact,
	mdiVuejs,
	mdiTailwind,
	mdiEmail,
	mdiGithub,
	mdiTwitter,
	mdiLinkedin
} from '@mdi/js'
import { Icon } from '@mdi/react'

export type IconNames = "linkedin"|"nodejs"|"python"|"javascript"|"typescript"|"react"|"vuejs"|"discord"|"prisma"|"mongodb"|"tailwind"|"email"|"github"|"twitter"

interface IconProps {
	name: IconNames
}

export default function CustomIcon({ name }: IconProps) {
	switch(name) {
		case "email":
			return ( <Icon path={mdiEmail} size={1}/> )
		case "github":
			return ( <Icon path={mdiGithub} size={1}/> )
		case "twitter":
			return ( <Icon path={mdiTwitter} size={1}/> )
		case "tailwind":
			return ( <Icon path={mdiTailwind} size={1}/> )
		case "nodejs":
			return ( <Icon path={mdiNodejs} size={1}/> )
		case "python":
			return ( <Icon path={mdiLanguagePython} size={1}/> )
		case "javascript":
			return ( <Icon path={mdiLanguageJavascript} size={1}/> )
		case "typescript":
			return ( <Icon path={mdiLanguageTypescript} size={1}/> )
		case "react":
			return ( <Icon path={mdiReact} size={1}/> )
		case "vuejs":
			return ( <Icon path={mdiVuejs} size={1}/> )
		case "linkedin":
			return ( <Icon path={mdiLinkedin} size={1}/> )
		case "discord":
			return (
				<svg height="24" viewBox="-10.63 -.07077792 823.87 610.06955549" width="24" xmlns="http://www.w3.org/2000/svg">
					<path className="fill-zinc-600 dark:fill-zinc-400" d="m678.27 51.62c90.35 132.84 134.97 282.68 118.29 455.18-.07.73-.45 1.4-1.05 1.84-68.42 50.24-134.71 80.73-200.07 100.95a2.55 2.55 0 0 1 -2.81-.95c-15.1-21.01-28.82-43.16-40.84-66.42-.69-1.37-.06-3.02 1.36-3.56 21.79-8.21 42.51-18.05 62.44-29.7 1.57-.92 1.67-3.17.22-4.25-4.23-3.14-8.42-6.44-12.43-9.74-.75-.61-1.76-.73-2.61-.32-129.39 59.75-271.13 59.75-402.05 0-.85-.38-1.86-.25-2.59.35-4 3.3-8.2 6.57-12.39 9.71-1.45 1.08-1.33 3.33.25 4.25 19.93 11.43 40.65 21.49 62.41 29.74 1.41.54 2.08 2.15 1.38 3.52-11.76 23.29-25.48 45.44-40.86 66.45-.67.85-1.77 1.24-2.81.92-65.05-20.22-131.34-50.71-199.76-100.95-.57-.44-.98-1.14-1.04-1.87-13.94-149.21 14.47-300.29 118.18-455.18.25-.41.63-.73 1.07-.92 51.03-23.42 105.7-40.65 162.84-50.49 1.04-.16 2.08.32 2.62 1.24 7.06 12.5 15.13 28.53 20.59 41.63 60.23-9.2 121.4-9.2 182.89 0 5.46-12.82 13.25-29.13 20.28-41.63a2.47 2.47 0 0 1 2.62-1.24c57.17 9.87 111.84 27.1 162.83 50.49.45.19.82.51 1.04.95zm-339.04 283.7c.63-44.11-31.53-80.61-71.9-80.61-40.04 0-71.89 36.18-71.89 80.61 0 44.42 32.48 80.6 71.89 80.6 40.05 0 71.9-36.18 71.9-80.6zm265.82 0c.63-44.11-31.53-80.61-71.89-80.61-40.05 0-71.9 36.18-71.9 80.61 0 44.42 32.48 80.6 71.9 80.6 40.36 0 71.89-36.18 71.89-80.6z"/>
				</svg>
			)
		case "prisma":
			return (
				<svg fill="none" height="24" viewBox="0 0 124 128" width="24" xmlns="http://www.w3.org/2000/svg">
					<g className="fill-zinc-600 dark:fill-zinc-400">
						<path clipRule={"evenodd"} d="M 95.732 101.529 L 38.254 118.529 C 36.498 119.049 34.815 117.53 35.184 115.759 L 55.718 17.419 C 56.102 15.581 58.644 15.289 59.445 16.992 L 97.465 97.728 C 98.183 99.251 97.364 101.047 95.732 101.529 Z M 105.589 97.519 L 61.567 4.037 L 61.567 4.035 C 60.454 1.69 58.141 0.145 55.549 0.013 C 52.87 -0.143 50.469 1.149 49.116 3.348 L 1.372 80.678 C -0.109 83.063 -0.076 86.089 1.456 88.441 L 24.794 124.593 C 26.185 126.751 28.595 128 31.1 128 C 31.81 128 32.523 127.9 33.226 127.692 L 100.969 107.656 C 103.033 107.051 104.733 105.582 105.629 103.628 C 106.515 101.684 106.501 99.45 105.589 97.518 L 105.589 97.519 Z"/>
					</g>
				</svg>
			)
		case "mongodb":
			return (
				<svg className="fill-zinc-600 dark:fill-zinc-400"  height="24" viewBox="9 -5 17.45992422 39.40619484" width="24" xmlns="http://www.w3.org/2000/svg">
					<path d="m15.9.087.854 1.604c.192.296.4.558.645.802a22.406 22.406 0 0 1 2.004 2.266c1.447 1.9 2.423 4.01 3.12 6.292.418 1.394.645 2.824.662 4.27.07 4.323-1.412 8.035-4.4 11.12a12.7 12.7 0 0 1 -1.57 1.342c-.296 0-.436-.227-.558-.436a3.589 3.589 0 0 1 -.436-1.255c-.105-.523-.174-1.046-.14-1.586v-.244c-.024-.052-.285-24.052-.181-24.175z"/>
					<path d="m15.9.034c-.035-.07-.07-.017-.105.017.017.35-.105.662-.296.96-.21.296-.488.523-.767.767-1.55 1.342-2.77 2.963-3.747 4.776-1.3 2.44-1.97 5.055-2.16 7.808-.087.993.314 4.497.627 5.508.854 2.684 2.388 4.933 4.375 6.885.488.47 1.01.906 1.55 1.325.157 0 .174-.14.21-.244a4.78 4.78 0 0 0 .157-.68l.35-2.614z"/>
					<path d="m16.754 28.845c.035-.4.227-.732.436-1.063-.21-.087-.366-.26-.488-.453a3.235 3.235 0 0 1 -.26-.575c-.244-.732-.296-1.5-.366-2.248v-.453c-.087.07-.105.662-.105.75a17.37 17.37 0 0 1 -.314 2.353c-.052.314-.087.627-.28.906 0 .035 0 .07.017.122.314.924.4 1.865.453 2.824v.35c0 .418-.017.33.33.47.14.052.296.07.436.174.105 0 .122-.087.122-.157l-.052-.575v-1.604c-.017-.28.035-.558.07-.82z"/>
				</svg>
			)
		default:
			return ( <Icon path={mdiAlert}/> )
	}
}