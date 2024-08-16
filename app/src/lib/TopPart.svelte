<script>
	import img from '$lib/images/profile-photo.png';
</script>

<div class="text-column">
	<div class="sidebar-info">
		<figure>
			<img src={img} alt="Johannes Döllinger" width="80" />
		</figure>

		<div class="info-content">
			<h1 class="name" title="Johannes Döllinger">Johannes Döllinger</h1>

			<p class="title">Web developer</p>
		</div>
	</div>

	<div>
		<div class="separator"></div>

		<ul class="contacts-list">
			<li class="contact-item">
				<div class="icon-box">
					<ion-icon name="mail-outline"></ion-icon>
				</div>

				<div class="contact-info">
					<p class="contact-title">Email</p>

					<a href="mailto:johannes.doellinger@gmail.com" class="contact-link"
						>johannes.doellinger@gmail.com</a
					>
				</div>
			</li>

			<li class="contact-item">
				<div class="icon-box">
					<ion-icon name="location-outline"></ion-icon>
				</div>

				<div class="contact-info">
					<p class="contact-title">Location</p>

					<address>Esslingen, Germany</address>
				</div>
			</li>
		</ul>
	</div>
</div>
