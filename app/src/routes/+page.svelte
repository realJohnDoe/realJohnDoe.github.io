<script>
	import MainLayout from '$lib/MainLayout.svelte';
	import PortfolioCard from '$lib/PortfolioCard.svelte';
	import kenpoImg from '$lib/images/kenpo-notes.jpg';
	import feelbackImg from '$lib/images/feelback-summary.jpg';
	import campfireImg from '$lib/images/campfire-game.jpg';
	import prSizeImg from '$lib/images/pr-labels.jpg';
	import ideaCraftImg from '$lib/images/idea-craft.jpg';
	import timeLineImg from '$lib/images/time-lines-edited.jpg';
	import openIcon from '$lib/images/open.svg';
	import openIconColored from '$lib/images/open-colored.svg';
	import gitHubIcon from '$lib/images/github.svg';
	import githubIconColored from '$lib/images/github-colored.svg';
	import gitLabIconColored from '$lib/images/gitlab-colored.svg';
	import gitLabIcon from '$lib/images/gitlab.svg';
	import Header from '$lib/Header.svelte';
	import { techButtons } from '$lib/techButtons';
	import TechButton from '$lib/TechButton.svelte';

	const colored_icons = true;

	const usedOpenIcon = colored_icons ? openIconColored : openIcon;
	const usedGitHubIcon = colored_icons ? githubIconColored : gitHubIcon;
	const usedGitLabIcon = colored_icons ? gitLabIconColored : gitLabIcon;
</script>

<svelte:head>
	<title>Johannes Döllinger</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<MainLayout>
	<Header />
	<div class="card bg-base-200 shadow-xl flex flex-col">
		<div class="card-body p-4 lg:p-8">
			<h1 class="text-2xl">About Me</h1>

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

			<h2 class="text-xl">What I'm Doing</h2>

			<div class="grid md:grid-cols-2 gap-4">
				<li class="card bg-base-300 shadow-xl">
					<div class="card-body">
						<div class="badge badge-secondary text-lg py-3 rounded-md">Solution Architecture</div>

						<p>
							Learning from our users about how they use our software and how we can improve it. 
							Ensuring that the software I contribute to is easy and fun to use.
						</p>
					</div>
				</li>

				<div class="card bg-base-300 shadow-xl">
					<div class="card-body">
						<div class="badge badge-secondary text-lg py-3 rounded-md">Agile Coaching</div>

						<p>
							Figuring out which Agile Methods work well for which team. Making the costs of social
							friction transparent, so resolving it can be prioritized accordingly.
						</p>
					</div>
				</div>

				<div class="card bg-base-300 shadow-xl">
					<div class="card-body">
						<div class="badge badge-secondary text-lg py-3 rounded-md">
							Full-Stack Software Engineering
						</div>

						<p>
							Modern web development using Python, Clean Code, Clean Architecture, 
							and Continuous Delivery.
						</p>
					</div>
				</div>

				<li class="card bg-base-300 shadow-xl">
					<div class="card-body">
						<div class="badge badge-secondary text-lg py-3 rounded-md">Mentoring</div>

						<p>
							Sharing my software development experience so others don't have to repeat many of my
							own mistakes.
						</p>
					</div>
				</li>
			</div>
		</div>
	</div>
	<div class="card bg-base-200 shadow-xl flex flex-col" id="experience">
		<div class="card-body p-4 md:p-8">
			<h1 class="text-2xl">Experience</h1>
			<div class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
				<li>
					<div class="timeline-start mb-10 md:text-end">
						<time class="font-mono italic">2021 — Present</time>
						<h3 class="text-lg font-semibold">Senior Software Engineer, Bosch Research</h3>

						<p>
							Building developer tools for researchers of Bosch.<br />
							Improving internal team collaboration through carefully chosen tools and methods.
							<br />
							Mentoring other developers.
						</p>
						<div class="flex gap-2 pt-2 md:justify-end">
							<!-- New section for technologies -->
							<TechButton techButtonProps={techButtons.python} />
							<TechButton techButtonProps={techButtons.githubActions} />
							<TechButton techButtonProps={techButtons.databricks} />
							<TechButton techButtonProps={techButtons.miro} />
						</div>
					</div>
					<div class="timeline-middle">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							class="h-5 w-5"
						>
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
					<div class="timeline-end"></div>
					<hr />
				</li>
				<li>
					<hr />
					<div class="timeline-middle">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							class="h-5 w-5"
						>
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
					<div class="timeline-end mb-10">
						<time class="font-mono italic">2018 — 2021</time>
						<h3 class="text-lg font-semibold">
							Research Engineer, Bosch Center for Artificial Intelligence
						</h3>

						<p>
							Applied cutting-edge deep reinforcement learning methods to highway lane change
							maneuvers.<br />
							Integration of machine learning frameworks and simulation.
							<br />
							First statistical evaluation of existing assisted driving functions.
						</p>
						<div class="flex gap-2 pt-2">
							<TechButton techButtonProps={techButtons.python} />
							<TechButton techButtonProps={techButtons.numpy} />
							<TechButton techButtonProps={techButtons.pytoch} />
						</div>
					</div>
					<hr />
				</li>
				<li>
					<hr />
					<div class="timeline-middle">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							class="h-5 w-5"
						>
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
					<div class="timeline-start md:text-end">
						<time class="font-mono italic">2016 — 2018</time>
						<h3 class="text-lg font-semibold">
							PhD Candidate, Bosch Center for Artificial Intelligence
						</h3>

						<p>
							Predicted pedestrian motion inside buildings using deep learning to improve robot
							navigation<br />
							Published of
							<a class="link-accent" href="https://scholar.google.de/citations?user=qbgZXYIAAAAJ">
								two papers
							</a>
							at ICRA and RA-L.
						</p>
						<div class="flex gap-2 pt-2 md:justify-end">
							<TechButton techButtonProps={techButtons.python} />
							<TechButton techButtonProps={techButtons.tensorflow} />
							<TechButton techButtonProps={techButtons.ros} />
						</div>
					</div>
					<hr />
				</li>
				<li>
					<hr />
					<div class="timeline-middle">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							class="h-5 w-5"
						>
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
					<div class="timeline-end">
						<time class="font-mono italic">2011 — 2016</time>
						<h3 class="text-lg font-semibold">MSc. Physics, University of Regensburg</h3>

						<p>
							Elite study course, a fusion of the bachelor's and master's courses with advanced
							lectures, three-week research projects
							<br />
							Recipient of the Deutschlandstipendium, a national, ideology-free scholarship for highly
							talented, motivated students, who are also socially committed <br />
							Internship as a research scholar at the Columbia University in the City of New York
							<br />
						</p>
						<div class="flex gap-2 pt-2">
							<TechButton techButtonProps={techButtons.matlab} />
							<TechButton techButtonProps={techButtons.cplusplus} />
						</div>
					</div>
				</li>
			</div>
		</div>
	</div>
	<div class="card bg-base-200 shadow-xl flex flex-col" id="projects">
		<div class="card-body p-4 md:p-8">
			<h2 class="text-2xl">Side Projects</h2>
			<div class="grid sm:grid-cols-2 gap-4">
				<PortfolioCard
					image={kenpoImg}
					title="Kenpo Notes"
					description="Structuring my Dojo's Kenpo Content"
					links={[
						{
							href: 'https://realjohndoe.github.io/kenpo-notes/',
							icon: usedOpenIcon,
							text: 'Open'
						},
						{
							href: 'https://github.com/realJohnDoe/kenpo-quartz',
							icon: usedGitHubIcon,
							text: 'GitHub'
						}
					]}
					technologies={[techButtons.obsidian, techButtons.githubActions]}
				/>
				<PortfolioCard
					image={feelbackImg}
					title="Feelback"
					description="Privacy-friendly Emotion Tracker for Android"
					links={[
						{
							href: 'https://play.google.com/store/apps/details?id=com.johndoe_software.feelback',
							icon: usedOpenIcon,
							text: 'Google Play'
						},
						{
							href: 'https://gitlab.com/jdcoding/feelback',
							icon: usedGitLabIcon,
							text: 'GitLab'
						}
					]}
					technologies={[
						techButtons.kotlin,
						techButtons.jetpackCompose,
						techButtons.playstore,
						techButtons.material
					]}
				/>
				<PortfolioCard
					image={prSizeImg}
					title="PR Size Labeler"
					description="A GitHub Action to Label Pull Requests Depending on Their Size"
					links={[
						{
							href: 'https://github.com/boschresearch/pr-size-labeler',
							icon: usedGitHubIcon,
							text: 'GitHub'
						}
					]}
					technologies={[techButtons.githubActions, techButtons.javascript]}
				/>
				<PortfolioCard
					image={ideaCraftImg}
					title="IdeaCraft"
					description="Playing around with Lovable, Windsurf, and Cursor to build some Obsidian-like productivity tool."
					links={[
						{
							href: 'https://realjohndoe.github.io/idea-craft/',
							icon: usedOpenIcon,
							text: 'Open'
						},
						{
							href: 'https://github.com/realJohnDoe/idea-craft',
							icon: usedGitHubIcon,
							text: 'GitHub'
						}
					]}
					technologies={[
						techButtons.lovable,
						techButtons.windsurf,
						techButtons.cursor,
						techButtons.markdown,
						techButtons.react,
						techButtons.tailwind
					]}
				/>
				<PortfolioCard
					image={campfireImg}
					title="Campfire Game"
					description="A mini game where you control the smoke of a campfire to test current AI tools."
					links={[
						{
							href: 'https://realjohndoe.github.io/campfire-game/',
							icon: usedOpenIcon,
							text: 'Open'
						},
						{
							href: 'https://github.com/realJohnDoe/campfire-game',
							icon: usedGitHubIcon,
							text: 'GitHub'
						}
					]}
					technologies={[techButtons.windsurf, techButtons.javascript]}
				/>

				<PortfolioCard
					image={timeLineImg}
					title="Time Lines"
					description="A Small Web App to Visualize Topics on a Timeline from yaml."
					links={[
						{
							href: 'https://realjohndoe.github.io/time-lines/',
							icon: usedOpenIcon,
							text: 'Open'
						},
						{
							href: 'https://github.com/realJohnDoe/time-lines',
							icon: usedGitHubIcon,
							text: 'GitHub'
						}
					]}
					technologies={[techButtons.javascript, techButtons.tailwind]}
				/>
			</div>
		</div>
	</div>
</MainLayout>
