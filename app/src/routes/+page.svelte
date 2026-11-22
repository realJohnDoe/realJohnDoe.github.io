<script>
	import MainLayout from '#lib/MainLayout.svelte';
	import PortfolioCard from '#lib/PortfolioCard.svelte';
	import kenpoImg from '#lib/images/kenpo-notes.jpg';
	import feelbackImg from '#lib/images/feelback-summary.jpg';
	import campfireImg from '#lib/images/campfire-game.jpg';
	import prSizeImg from '#lib/images/pr-labels.jpg';
	import ideaCraftImg from '#lib/images/idea-craft.jpg';
	import timeLineImg from '#lib/images/time-lines-edited.jpg';
	import meridianAgendaImg from '#lib/images/meridian-agenda.jpg';
	import meridianCalendarImg from '#lib/images/meridian-calendar.jpg';
	import meridianEntryImg from '#lib/images/meridian-entry.jpg';
	import rentenlueckeImg from '#lib/images/rentenluecke.jpg';
	import tracemapImg from '#lib/images/tracemap.jpg';
	import structraImg from '#lib/images/structra.jpg';
	import workshopImg from '#lib/images/workshop-board.jpg';
	import openIconColored from '#lib/images/open-colored.svg';
	import githubIconColored from '#lib/images/github-colored.svg';
	import gitLabIconColored from '#lib/images/gitlab-colored.svg';
	import Header from '#lib/Header.svelte';
	import { techButtons } from '#lib/techButtons.js';
	import TechButton from '#lib/TechButton.svelte';
	import PostCard from '#lib/PostCard.svelte';
	import { postMetas } from '#lib/posts.js';

	const doing = [
		{
			title: 'Full-Stack Software Engineering',
			text: 'Modern web development using Python, Clean Code, Clean Architecture, and Continuous Delivery.'
		},
		{
			title: 'Agile Coaching',
			text: 'Figuring out which Agile Methods work well for which team. Making the costs of social friction transparent, so resolving it can be prioritized accordingly.'
		},
		{
			title: 'Solution Architecture',
			text: 'Learning from our users about how they use our software and how we can improve it. Ensuring that the software I contribute to is easy and fun to use.'
		},
		{
			title: 'Mentoring',
			text: "Sharing my software development experience so others don't have to repeat many of my own mistakes."
		}
	];

	/** @param {string} repo @param {string} [site] */
	const links = (repo, site) => [
		...(site ? [{ href: site, icon: openIconColored, text: 'Open' }] : []),
		{ href: repo, icon: githubIconColored, text: 'GitHub' }
	];

	/** @param {string} name Repository name under realJohnDoe; the site lives at the same name on GitHub Pages. */
	const own = (name) =>
		links(`https://github.com/realJohnDoe/${name}`, `https://realjohndoe.github.io/${name}/`);

	const projects = [
		{
			images: [meridianAgendaImg, meridianCalendarImg, meridianEntryImg],
			title: 'Meridian',
			description:
				'A calendar, task manager, and notes app where every entry is a plain Markdown file.',
			links: own('meridian'),
			technologies: [
				techButtons.claude,
				techButtons.typescript,
				techButtons.markdown,
				techButtons.react,
				techButtons.tailwind
			]
		},
		{
			image: tracemapImg,
			title: 'Trace Map',
			description:
				'Draws a trace as a directory tree with a highlighted line through it, to show which files a piece of behaviour touches and in what order. Web app, CLI, and an agent skill for PR descriptions.',
			links: own('tracemap'),
			technologies: [
				techButtons.claude,
				techButtons.typescript,
				techButtons.react,
				techButtons.tailwind
			]
		},
		{
			image: structraImg,
			title: 'Structra',
			description:
				"Reads a repository's file-to-file imports and finds the hierarchy that keeps them inside their groups, ignoring the folders, so you can hold it up against the structure you have. Drag the balance slider to go from flat to deep.",
			links: own('structra'),
			technologies: [
				techButtons.claude,
				techButtons.typescript,
				techButtons.python,
				techButtons.react
			]
		},
		{
			image: workshopImg,
			title: "Joe's Workshop",
			description:
				'A Claude Code plugin that runs my side projects on a schedule: it hands tier-labelled issues to agent sessions, follows up on their PRs and merges them, surveys code health, and shows what waits on me on one board.',
			links: links(
				'https://github.com/realJohnDoe/agent-skills',
				'https://realjohndoe.github.io/agent-skills/'
			),
			technologies: [techButtons.claude, techButtons.typescript, techButtons.githubActions]
		},
		{
			image: rentenlueckeImg,
			title: 'Rentenlücke',
			description:
				'A calculator for the gap between your desired retirement income and what your pensions and savings will actually pay out.',
			links: own('rentenluecke'),
			technologies: [
				techButtons.claude,
				techButtons.typescript,
				techButtons.react,
				techButtons.tailwind
			]
		},
		{
			image: kenpoImg,
			title: 'Kenpo Notes',
			description: "Structuring my Dojo's Kenpo curriculum and animating some Kenpo techniques.",
			links: own('kenpo-notes'),
			technologies: [
				techButtons.obsidian,
				techButtons.githubActions,
				techButtons.animejs,
				techButtons.svelte
			]
		},
		{
			image: prSizeImg,
			title: 'PR Size Labeler',
			description: 'A GitHub Action to label and comment pull requests depending on their size.',
			links: links('https://github.com/boschresearch/pr-size-labeler'),
			technologies: [techButtons.githubActions, techButtons.javascript]
		},
		{
			image: campfireImg,
			title: 'Campfire Game',
			description:
				'A mini game where you control the smoke of a campfire to test current AI tools.',
			links: own('campfire-game'),
			technologies: [techButtons.windsurf, techButtons.javascript]
		},
		{
			image: timeLineImg,
			title: 'Time Lines',
			description: 'A small web app to visualize topics from a yaml file on a timeline.',
			links: own('time-lines'),
			technologies: [techButtons.javascript, techButtons.tailwind]
		},
		{
			image: feelbackImg,
			title: 'Feelback',
			archived: true,
			description: 'Privacy-friendly emotion tracker for Android.',
			links: [
				{ href: 'https://gitlab.com/jdcoding/feelback', icon: gitLabIconColored, text: 'GitLab' }
			],
			technologies: [
				techButtons.kotlin,
				techButtons.jetpackCompose,
				techButtons.playstore,
				techButtons.material
			]
		},
		{
			image: ideaCraftImg,
			title: 'IdeaCraft',
			archived: true,
			description:
				'Playing around with Lovable, Windsurf, and Cursor to build some Obsidian-like productivity tool.',
			links: own('idea-craft'),
			technologies: [
				techButtons.lovable,
				techButtons.windsurf,
				techButtons.cursor,
				techButtons.markdown,
				techButtons.react,
				techButtons.tailwind
			]
		}
	];

	// Each line of `lines` is a string or a snippet; lines are separated by <br />.
	const experience = [
		{
			period: '2021 — Present',
			title: 'Senior Software Engineer, Bosch Research',
			lines: [
				'Building developer tools for researchers of Bosch.',
				'Improving internal team collaboration through carefully chosen tools and methods.',
				'Mentoring other developers.'
			],
			tech: [
				techButtons.python,
				techButtons.githubActions,
				techButtons.databricks,
				techButtons.miro,
				techButtons.claude
			]
		},
		{
			period: '2018 — 2021',
			title: 'Research Engineer, Bosch Center for Artificial Intelligence',
			lines: [
				'Applied cutting-edge deep reinforcement learning methods to highway lane change maneuvers.',
				'Integration of machine learning frameworks and simulation.',
				'First statistical evaluation of existing assisted driving functions.'
			],
			tech: [techButtons.python, techButtons.numpy, techButtons.pytoch]
		},
		{
			period: '2016 — 2018',
			title: 'PhD Candidate, Bosch Center for Artificial Intelligence',
			lines: [
				'Predicted pedestrian motion inside buildings using deep learning to improve robot navigation',
				papers
			],
			tech: [techButtons.python, techButtons.tensorflow, techButtons.ros]
		},
		{
			period: '2011 — 2016',
			title: 'MSc. Physics, University of Regensburg',
			lines: [
				"Elite study course, a fusion of the bachelor's and master's courses with advanced lectures, three-week research projects",
				'Recipient of the Deutschlandstipendium, a national, ideology-free scholarship for highly talented, motivated students, who are also socially committed',
				'Internship as a research scholar at the Columbia University in the City of New York'
			],
			tech: [techButtons.matlab, techButtons.cplusplus]
		}
	];
</script>

<svelte:head>
	<title>Johannes Döllinger</title>
	<meta
		name="description"
		content="Johannes Döllinger — senior software engineer at Bosch Research. Solution architecture, agile coaching, full-stack engineering, and mentoring."
	/>
</svelte:head>

{#snippet icon()}
	<div class="timeline-middle">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
			<path
				fill-rule="evenodd"
				d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
				clip-rule="evenodd"
			/>
		</svg>
	</div>
{/snippet}

{#snippet papers()}
	Published of
	<a class="link-accent" href="https://scholar.google.de/citations?user=qbgZXYIAAAAJ">two papers</a>
	at ICRA and RA-L.
{/snippet}

<MainLayout>
	<Header />
	<div class="card bg-base-300 shadow-xl flex flex-col">
		<div class="card-body p-4 md:p-6">
			<h2 class="text-2xl pb-2">About Me</h2>

			<div class="pb-3">
				<p>
					I'm making <a class="link-accent" href="https://www.bosch.com/research/">
						Bosch Research</a
					>
					more digital by building developer tools for common developer tasks, coaching my team so everyone
					has the right context to work effectively, and mentoring researchers to improve their software
					skills.
					<br />
					More generally, I enjoy connecting humans, by giving structure to source code, user interfaces,
					and people.
				</p>
			</div>

			<h2 class="text-xl pb-1">What I'm Doing</h2>

			<div class="grid md:grid-cols-2 gap-4">
				{#each doing as item (item.title)}
					<div class="rounded-xl border border-primary">
						<div class="p-4 md:p-6">
							<div class="badge badge-secondary text-lg py-3 mb-2 rounded-md">{item.title}</div>

							<p>{item.text}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
	<div class="card bg-base-300 shadow-xl flex flex-col" id="experience">
		<div class="card-body p-4 md:p-6">
			<h2 class="text-2xl pb-2">Experience</h2>
			<ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
				{#each experience as job, i (job.period)}
					{@const first = i === 0}
					{@const last = i === experience.length - 1}
					{@const start = i % 2 === 0}
					<li>
						{#if !first}<hr class="bg-base-100" />{/if}
						{@render icon()}
						<div
							class={start
								? 'timeline-start mb-10 md:text-end'
								: ['timeline-end', !last && 'mb-10']}
						>
							<time class="font-mono italic">{job.period}</time>
							<h3 class="text-lg font-semibold">{job.title}</h3>

							<p>
								{#each job.lines as line, j (j)}
									{#if j > 0}<br />{/if}
									{#if typeof line === 'string'}{line}{:else}{@render line()}{/if}
								{/each}
							</p>
							<div class={['flex gap-2 pt-2', start && 'md:justify-end']}>
								{#each job.tech as tech (tech)}
									<TechButton techButtonProps={tech} />
								{/each}
							</div>
						</div>
						{#if first}<div class="timeline-end"></div>{/if}
						{#if !last}<hr class="bg-base-100" />{/if}
					</li>
				{/each}
			</ul>
		</div>
	</div>
	<div class="card bg-base-300 shadow-xl flex flex-col" id="projects">
		<div class="card-body p-4 md:p-6">
			<h2 class="text-2xl pb-2">Side Projects</h2>
			<div class="grid md:grid-cols-2 gap-4">
				{#each projects as project (project.title)}
					<PortfolioCard {...project} />
				{/each}
			</div>
		</div>
	</div>
	{#if postMetas.length}
		<div class="card bg-base-300 shadow-xl flex flex-col" id="writing">
			<div class="card-body p-4 md:p-6">
				<h2 class="text-2xl pb-2">Writing</h2>

				<p class="pb-3">Longer-form notes on the things I build and the decisions behind them.</p>

				<div class="grid gap-4">
					{#each postMetas as post (post.slug)}
						<PostCard {post} />
					{/each}
				</div>
			</div>
		</div>
	{/if}
</MainLayout>
