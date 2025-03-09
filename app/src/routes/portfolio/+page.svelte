<script>
	import MainLayout from '$lib/MainLayout.svelte';
	import kenpoImg from '$lib/images/kenpo-notes.jpg';
	import feelbackImg from '$lib/images/feelback-summary.jpg';
	import campfireImg from '$lib/images/campfire-game.jpg';
	import prSizeImg from '$lib/images/pr-labels.jpg';
	import openIcon from '$lib/images/open.svg';
	import gitHubIcon from '$lib/images/github.svg';
	import gitLabIcon from '$lib/images/gitlab.svg';
	import PortfolioCard from '$lib/PortfolioCard.svelte';
</script>

<svelte:head>
	<meta name="description" content="About this app" />
</svelte:head>

<MainLayout>
	<div class="grid sm:grid-cols-2 gap-4">
		<PortfolioCard
			image={kenpoImg}
			title="Kenpo Notes"
			description="Structuring my Dojo's Kenpo Content"
			links={[
				{ href: 'https://realjohndoe.github.io/kenpo-notes/', icon: openIcon, text: 'Open' },
				{ href: 'https://github.com/realJohnDoe/kenpo-quartz', icon: gitHubIcon, text: 'GitHub' }
			]}
		/>
		<PortfolioCard
			image={campfireImg}
			title="Campfire Game"
			description="A mini game where you control the smoke of a campfired to test current AI tools."
			links={[
				{ href: 'https://realjohndoe.github.io/campfire-game/', icon: openIcon, text: 'Open' },
				{ href: 'https://github.com/realJohnDoe/campfire-game', icon: gitHubIcon, text: 'GitHub' }
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
</MainLayout>
