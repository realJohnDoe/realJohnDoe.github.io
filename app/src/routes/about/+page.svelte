<script>
	import TopPart from '$lib/TopPart.svelte';
</script>

<svelte:head>
	<title>Resume</title>
	<meta name="description" content="About this app" />
</svelte:head>

<section class="text-column">
	<TopPart />

	<article class="resume" data-page="resume">
		<header>
			<h1 class="h2 article-title">Resume</h1>
		</header>

		<section class="timeline">
			<div class="title-wrapper">
				<div class="icon-box">
					<ion-icon name="book-outline"></ion-icon>
				</div>

				<h3 class="h3">Experience</h3>
			</div>

			<ol class="timeline-list">
				<li class="timeline-item">
					<h4 class="h4 timeline-item-title">Senior Software Engineer, Bosch Research</h4>

					<span>2021 — Present</span>

					<p class="timeline-text">
						Building developer tools for researchers of Bosch. <br />
						Improving internal team collaboration through carefully chosen methods. <br />
						Mentoring other developers.
					</p>
				</li>

				<li class="timeline-item">
					<h4 class="h4 timeline-item-title">
						Research Engineer, Bosch Center for Artificial Intelligence
					</h4>

					<span>2018 — 2021</span>

					<p class="timeline-text">
						Applied cutting-edge deep reinvorcement learning methods to highway lane change
						maneuvers. <br />
						Integration of machine learning frameworks and simulation.
						<br />
						First statistical evaluation of existing assisted driving functions.
					</p>
				</li>

				<li class="timeline-item">
					<h4 class="h4 timeline-item-title">
						PhD Candidate, Bosch Center for Artificial Intelligence
					</h4>

					<span>2016 — 2018</span>

					<p class="timeline-text">
						Predicting pedestrian motion inside buildings using deep learning to improve robot
						navigation<br />
						Publication of
						<a href="https://scholar.google.de/citations?user=qbgZXYIAAAAJ">two papers</a>
						at ICRA and RA-L.
					</p>
				</li>
			</ol>
		</section>

		<section class="timeline">
			<div class="title-wrapper">
				<div class="icon-box">
					<ion-icon name="book-outline"></ion-icon>
				</div>

				<h3 class="h3">Education</h3>
			</div>

			<ol class="timeline-list">
				<li class="timeline-item">
					<h4 class="h4 timeline-item-title">MSc. Physics, University of Regensburg</h4>

					<span>2007 — 2008</span>

					<p class="timeline-text">
						Elite study course, a fusion of the bachelor's and master's course with advanced
						lectures, three-week research projects
						<br />
						Recipient of the Deutschlandstipendium, a national, ideology-free scholarship for highly
						talented, motivated students, who are also socially committed <br />
						Internship as a research scholar at the Columbia University in the City of New York
						<br />
					</p>
				</li>
			</ol>
		</section>

		<!-- <section class="skill">
		  <h3 class="h3 skills-title">My skills</h3>

		  <ul class="skills-list content-card">
			<li class="skills-item">
			  <div class="title-wrapper">
				<h5 class="h5">Web design</h5>
				<data value="80">80%</data>
			  </div>

			  <div class="skill-progress-bg">
				<div class="skill-progress-fill" style="width: 80%"></div>
			  </div>
			</li>

			<li class="skills-item">
			  <div class="title-wrapper">
				<h5 class="h5">Graphic design</h5>
				<data value="70">70%</data>
			  </div>

			  <div class="skill-progress-bg">
				<div class="skill-progress-fill" style="width: 70%"></div>
			  </div>
			</li>

			<li class="skills-item">
			  <div class="title-wrapper">
				<h5 class="h5">Branding</h5>
				<data value="90">90%</data>
			  </div>

			  <div class="skill-progress-bg">
				<div class="skill-progress-fill" style="width: 90%"></div>
			  </div>
			</li>

			<li class="skills-item">
			  <div class="title-wrapper">
				<h5 class="h5">WordPress</h5>
				<data value="50">50%</data>
			  </div>

			  <div class="skill-progress-bg">
				<div class="skill-progress-fill" style="width: 50%"></div>
			  </div>
			</li>
		  </ul>
		</section> -->
	</article>
</section>
