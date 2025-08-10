<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>BassemBots | Alfajral Bassem Robotics Club</title>
	<meta name="description" content="BassemBots is the robotics club at Alfajral Bassem. We build, code, and compete—come create the future with us." />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
</svelte:head>

<div class="min-h-screen bg-neutral-950 text-neutral-100 [font-family:Inter,ui-sans-serif,system-ui] selection:bg-blue-500/30">
	{@render children?.()}
</div>
