import mailIcon from '$lib/images/mail-colored.svg';
import githubIcon from '$lib/images/github-colored.svg';
import gitLabIcon from '$lib/images/gitlab-colored.svg';
import obsidianIcon from '$lib/images/obsidian-colored.svg';
import pythonIcon from '$lib/images/python-colored.svg';
import githubActionsIcon from '$lib/images/githubactions-colored.svg';
import databricksIcon from '$lib/images/databricks-colored.svg';
import miroIcon from '$lib/images/miro-colored.svg';
import markdownIcon from '$lib/images/markdown.svg';
import windsurfIcon from '$lib/images/windsurf.svg';
import javascriptIcon from '$lib/images/javascript.svg';
import kotlinIcon from '$lib/images/kotlin.svg';
import reactIcon from '$lib/images/react.svg';
import tailwindIcon from '$lib/images/tailwindcss.svg';
import cursorIcon from '$lib/images/cursor.png';
import lovableIcon from '$lib/images/lovable.svg';
import materialIcon from '$lib/images/m3.svg';
import playstoreIcon from '$lib/images/play-console.svg';
import jetpackComposeIcon from '$lib/images/jetpackcompose.svg';

export type TechButtonProps = {
	link: string;
	icon: string;
	alt: string;
	width: string;
};

export const techButtons = {
	mail: {
		link: 'mailto:johannes.doellinger@gmail.com',
		icon: mailIcon,
		alt: 'Mail',
		width: 'w-6'
	},
	github: {
		link: 'https://github.com/realJohnDoe',
		icon: githubIcon,
		alt: 'GitHub',
		width: 'w-6'
	},
	gitlab: {
		link: 'https://gitlab.com/jdcoding',
		icon: gitLabIcon,
		alt: 'GitLab',
		width: 'w-7'
	},
	obsidian: {
		link: 'https://obsidian.md/',
		icon: obsidianIcon,
		alt: 'Obsidian',
		width: 'w-7'
	},
	python: {
		link: 'https://www.python.org/',
		icon: pythonIcon,
		alt: 'Python',
		width: 'w-7'
	},
	githubActions: {
		link: 'https://docs.github.com/actions',
		icon: githubActionsIcon,
		alt: 'GitHub Actions',
		width: 'w-6'
	},
	databricks: {
		link: 'https://learn.microsoft.com/de-de/azure/databricks/',
		icon: databricksIcon,
		alt: 'Databricks',
		width: 'w-6'
	},
	miro: {
		link: 'https://miro.com',
		icon: miroIcon,
		alt: 'Miro',
		width: 'w-7'
	},
	markdown: {
		link: 'https://wikipedia.org/wiki/Markdown',
		icon: markdownIcon,
		alt: 'Markdown',
		width: 'w-7'
	},
	windsurf: {
		link: 'https://windsurfai.org/',
		icon: windsurfIcon,
		alt: 'Windsurf',
		width: 'w-4'
	},
	javascript: {
		link: 'https://wikipedia.org/wiki/JavaScript',
		icon: javascriptIcon,
		alt: 'JavaScript',
		width: 'w-6'
	},
	kotlin: {
		link: 'https://kotlinlang.org/docs/home.html',
		icon: kotlinIcon,
		alt: 'Kotlin',
		width: 'w-7'
	},
	react: {
		link: 'https://react.dev/',
		icon: reactIcon,
		alt: 'React',
		width: 'w-7'
	},
	tailwind: {
		link: 'https://tailwindcss.com/docs',
		icon: tailwindIcon,
		alt: 'Tailwind',
		width: 'w-7'
	},
	cursor: {
		link: 'https://www.cursor.com/',
		icon: cursorIcon,
		alt: 'Cursor',
		width: 'w-7'
	},
	lovable: {
		link: 'https://www.lovable.dev/',
		icon: lovableIcon,
		alt: 'Lovable',
		width: 'w-7'
	},
	material: {
		link: 'https://m3.material.io/',
		icon: materialIcon,
		alt: 'Material Design',
		width: 'w-9'
	},
	playstore: {
		link: 'https://developer.android.com/distribute/console?hl=de',
		icon: playstoreIcon,
		alt: 'Play Store',
		width: 'w-14'
	},
	jetpackCompose: {
		link: 'https://developer.android.com/jetpack/compose',
		icon: jetpackComposeIcon,
		alt: 'Jetpack Compose',
		width: 'w-7'
	}
};
