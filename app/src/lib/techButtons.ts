import mailIcon from '$lib/images/mail-colored.svg';
import githubIcon from '$lib/images/github-colored.svg';
import gitLabIcon from '$lib/images/gitlab-colored.svg';
import obsidianIcon from '$lib/images/obsidian-colored.svg';
import pythonIcon from '$lib/images/python-colored.svg';
import githubActionsIcon from '$lib/images/githubactions-colored.svg';
import databricksIcon from '$lib/images/databricks-colored.svg';
import miroIcon from '$lib/images/miro-colored.svg';

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
	}
};
