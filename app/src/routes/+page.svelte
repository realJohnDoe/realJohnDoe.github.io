<script>
	import MainLayout from '$lib/MainLayout.svelte';
	import PortfolioCard from '$lib/PortfolioCard.svelte';
	import kenpoImg from '$lib/images/kenpo-notes.jpg';
	import feelbackImg from '$lib/images/feelback-summary.jpg';
	import campfireImg from '$lib/images/campfire-game.jpg';
	import prSizeImg from '$lib/images/pr-labels.jpg';
	import openIcon from '$lib/images/open.svg';
	import gitHubIcon from '$lib/images/github.svg';
	import gitLabIcon from '$lib/images/gitlab.svg';
	import Header from '$lib/Header.svelte';
</script>

<svelte:head>
	<title>Johannes Döllinger</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<MainLayout>
	<Header />
	<div class="card shadow-xl flex flex-col">
		<div class="card-body p-4 md:p-8">
			<h1 class="text-2xl">About Me</h1>

			<div class="pb-3">
				<p>
					I'm making <a class="link-primary" href="https://www.bosch.com/research/">
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
				<li class="card shadow-md">
					<div class="card-body">
						<h3 class="text-lg font-semibold">Solution Architecture</h3>

						<p>
							Learning from our users how they use our software and how we can improve it. Ensuring
							the software I contribute to is easy and fun to use.
						</p>
					</div>
				</li>

				<div class="card shadow-md">
					<div class="card-body">
						<h3 class="text-lg font-semibold">Agile Coaching</h3>

						<p>
							Figuring out which Agile Methods work well for which team. Making costs of social
							friction transparent so it can be prioritized accordingly.
						</p>
					</div>
				</div>

				<div class="card shadow-md">
					<div class="card-body">
						<h3 class="text-lg font-semibold">Full-Stack Software Engineering</h3>

						<p>
							Modern web development using Python, Clean Code, Clean Architecture, and Continuous
							Delivery.
						</p>
					</div>
				</div>

				<li class="card shadow-md">
					<div class="card-body">
						<h3 class="text-lg font-semibold">Mentoring</h3>

						<p>
							Sharing my software development experience so others don't have to repeat many of my
							own mistakes.
						</p>
					</div>
				</li>
			</div>
		</div>
	</div>
	<div class="card shadow-xl flex flex-col" id="experience">
		<div class="card-body p-4 md:p-8">
			<h1 class="text-2xl">Experience</h1>
			<div class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
				<li>
					<div class="timeline-start mb-10 md:text-end">
						<time class="font-mono italic">2021 — Present</time>
						<h3 class="text-lg font-semibold">Senior Software Engineer, Bosch Research</h3>

						Building developer tools for researchers of Bosch.<br />
						Improving internal team collaboration through carefully chosen tools and methods.
						<br />
						Mentoring other developers.
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

						Applied cutting-edge deep reinvorcement learning methods to highway lane change
						maneuvers.<br />
						Integrated of machine learning frameworks and simulation.
						<br />
						First statistical evaluation of existing assisted driving functions.
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

						Predicted pedestrian motion inside buildings using deep learning to improve robot
						navigation<br />
						Published of
						<a class="link-primary" href="https://scholar.google.de/citations?user=qbgZXYIAAAAJ">
							two papers
						</a>
						at ICRA and RA-L.
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

						Elite study course, a fusion of the bachelor's and master's course with advanced
						lectures, three-week research projects
						<br />
						Recipient of the Deutschlandstipendium, a national, ideology-free scholarship for highly
						talented, motivated students, who are also socially committed <br />
						Internship as a research scholar at the Columbia University in the City of New York
						<br />
					</div>
				</li>
			</div>
		</div>
	</div>
	<div class="card shadow-xl flex flex-col" id="projects">
		<div class="card-body p-4 md:p-8">
			<h2 class="text-2xl">Projects</h2>
			<div class="grid sm:grid-cols-2 gap-4">
				<PortfolioCard
					image={kenpoImg}
					title="Kenpo Notes"
					description="Structuring my Dojo's Kenpo Content"
					links={[
						{ href: 'https://realjohndoe.github.io/kenpo-notes/', icon: openIcon, text: 'Open' },
						{
							href: 'https://github.com/realJohnDoe/kenpo-quartz',
							icon: gitHubIcon,
							text: 'GitHub'
						}
					]}
				/>
				<PortfolioCard
					image={campfireImg}
					title="Campfire Game"
					description="A mini game where you control the smoke of a campfired to test current AI tools."
					links={[
						{ href: 'https://realjohndoe.github.io/campfire-game/', icon: openIcon, text: 'Open' },
						{
							href: 'https://github.com/realJohnDoe/campfire-game',
							icon: gitHubIcon,
							text: 'GitHub'
						}
					]}
				/>
				<PortfolioCard
					image={feelbackImg}
					title="Feelback"
					description="Privacy-friendly Emotion Tracker for Android"
					links={[
						{
							href: 'https://play.google.com/store/apps/details?id=com.johndoe_software.feelback',
							icon: openIcon,
							text: 'Google Play'
						}
					]}
				/>
				<PortfolioCard
					image={prSizeImg}
					title="PR Size Labeler"
					description="A GitHub Action to Label Pull Requests Depending on Their Size"
					links={[
						{
							href: 'https://github.com/boschresearch/pr-size-labeler',
							icon: gitHubIcon,
							text: 'GitHub'
						}
					]}
				/>
			</div>
		</div>
	</div>
</MainLayout>
