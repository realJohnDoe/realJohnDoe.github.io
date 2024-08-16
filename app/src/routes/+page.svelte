<script>
	import TopPart from '$lib/TopPart.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<TopPart />

	<article class="about active" data-page="about">
		<header>
			<h1 class="h2 article-title">About me</h1>
		</header>

		<section class="about-text">
			<p>
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

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
