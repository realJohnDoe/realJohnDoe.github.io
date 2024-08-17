<script>
	import TopPart from '$lib/TopPart.svelte';

	let orangeYellowCrayola = 'hsl(45, 100%, 72%)';
	let shadowColor = 'hsla(0, 0%, 0%, 0.25)';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section style="--orange-yellow-crayola: {orangeYellowCrayola} --shadow-color: {shadowColor}">
	<TopPart />

	<article class="about" data-page="about">
		<header>
			<h1 class="h2 article-title">About me</h1>
		</header>

		<section class="about-text">
			<p class="text-center">
				I'm Software and DevOps Engineer from Esslingen, Germany, working for <a
					href="https://www.bosch.com/research/"
				>
					Bosch Research</a
				>.
				<br />
				I enjoy connecting humans, by giving structure to source code, communication, and user interfaces.
			</p>

			<!-- <p>
		  My job is to build your website so that it is functional and user-friendly but at the same time attractive.
		  Moreover, I
		  add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring
		  across your
		  message and identity in the most creative way. I created web design for many famous brand companies.
		</p> -->
		</section>

		<!--
		- service
	  -->

		<section class="service">
			<h3 class="h3 service-title">What i'm doing</h3>

			<ul class="service-list">
				<li class="service-item">
					<!-- <div class="service-icon-box">
				<img
				  src="./assets/images/icon-design.svg
			  "
				  alt="design icon"
				  width="40"
				/>
			  </div> -->

					<div class="service-content-box">
						<h4 class="h4 service-item-title">Software Engineering</h4>

						<p class="service-item-text">
							Modern web development using Python, Clean Code, Clean Architecture, and Continuous
							Delivery.
						</p>
					</div>
				</li>

				<li class="service-item">
					<!-- <div class="service-icon-box">
				<img
				  src="./assets/images/icon-dev.svg"
				  alt="Web development icon"
				  width="40"
				/>
			  </div> -->

					<div class="service-content-box">
						<h4 class="h4 service-item-title">Agile Coaching</h4>

						<p class="service-item-text">
							Figuring out which Agile Methods work well for which team. Making costs of social
							friction transparent so it can be prioritized accordingly.
						</p>
					</div>
				</li>

				<li class="service-item">
					<!-- <div class="service-icon-box">
				<img
				  src="./assets/images/icon-app.svg"
				  alt="mobile app icon"
				  width="40"
				/>
			  </div> -->

					<div class="service-content-box">
						<h4 class="h4 service-item-title">Mentoring</h4>

						<p class="service-item-text">
							Sharing my software development experience so others don't have to repeat many of my
							own mistakes.
						</p>
					</div>
				</li>

				<li class="service-item">
					<!-- <div class="service-icon-box">
				<img
				  src="./assets/images/icon-photo.svg"
				  alt="camera icon"
				  width="40"
				/>
			  </div> -->

					<div class="service-content-box">
						<h4 class="h4 service-item-title">User Experience</h4>

						<p class="service-item-text">
							Ensuring the software I contribute to is easy and fun to use.
						</p>
					</div>
				</li>
			</ul>
		</section>
	</article>
</section>

<!-- <style>
	:global(html) {
		--ff-poppins: 'Poppins', sans-serif;
		font-family: var(--ff-poppins);
	}

	:global(body) {
		--smoky-black: hsl(0, 0%, 7%);
		background: var(--smoky-black);
	}

	*,
	*::before,
	*::after {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	article {
		--eerie-black-2: hsl(240, 2%, 12%);
		--jet: hsl(0, 0%, 22%);
		--shadow-1: -4px 8px 24px --var(--shadow-color);
		background: var(--eerie-black-2);
		border: 1px solid var(--jet);
		border-radius: 20px;
		padding: 15px;
		box-shadow: var(--shadow-1);
		z-index: 1;
	}

	.h2,
	.h3,
	.h4 {
		--white-2: hsl(0, 0%, 98%);
		color: var(--white-2);
		text-transform: capitalize;
	}

	a {
		color: var(--orange-yellow-crayola);
	}

	li {
		list-style: none;
	}

	.service-title {
		margin-bottom: 20px;
	}

	.service-list {
		display: grid;
		grid-template-columns: 1fr;
		gap: 20px;
	}

	.service-item {
		--border-gradient-onyx: linear-gradient(
			to bottom right,
			hsl(0, 0%, 25%) 0%,
			hsla(0, 0%, 25%, 0) 50%
		);
		position: relative;
		background: var(--border-gradient-onyx);
		padding: 20px;
		border-radius: 14px;
		box-shadow: var(--shadow-2);
		z-index: 1;

		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		gap: 18px;
		padding: 30px;
	}

	.service-item::before {
		content: '';
		position: absolute;
		inset: 1px;
		background: var(--bg-gradient-jet);
		border-radius: inherit;
		z-index: -1;
	}

	.about-text,
	.service-item-text {
		--light-gray: hsl(0, 0%, 84%);
		--fs-6: 14px;
		color: var(--light-gray);
		font-size: var(--fs-6);
		line-height: 1.6;
	}

	.article-title {
		position: relative;
		padding-bottom: 7px;
	}

	.article-title::after {
		--text-gradient-yellow: linear-gradient(
			to right,
			--var(--orange-yellow-crayola),
			hsl(35, 100%, 68%)
		);
		--shadow-2: 0 16px 30px --var(--shadow-color);
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 30px;
		height: 3px;
		background: var(--text-gradient-yellow);
		border-radius: 3px;
	}

	.service-item-title {
		margin-bottom: 7px;
	}

	.service-content-box {
		text-align: left;
	}
</style> -->
