<script>
	import MainLayout from '$lib/MainLayout.svelte';
</script>

<svelte:head>
	<meta name="description" content="About this app" />
</svelte:head>

<MainLayout>
	<div class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
		<li>
			<div class="timeline-start mb-10 md:text-end">
				<time class="font-mono italic">2021 — Present</time>
				<h3 class="text-lg font-semibold">Senior Software Engineer, Bosch Research</h3>

				Building developer tools for researchers of Bosch.<br />
				Improving internal team collaboration through carefully chosen tools and methods. <br />
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

				Applied cutting-edge deep reinvorcement learning methods to highway lane change maneuvers.<br
				/>
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

				Predicted pedestrian motion inside buildings using deep learning to improve robot navigation<br
				/>
				Published of
				<a
					class="link text-lime-600 hover:text-lime-800"
					href="https://scholar.google.de/citations?user=qbgZXYIAAAAJ"
				>
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

				Elite study course, a fusion of the bachelor's and master's course with advanced lectures,
				three-week research projects
				<br />
				Recipient of the Deutschlandstipendium, a national, ideology-free scholarship for highly talented,
				motivated students, who are also socially committed <br />
				Internship as a research scholar at the Columbia University in the City of New York
				<br />
			</div>
		</li>
	</div>
</MainLayout>
