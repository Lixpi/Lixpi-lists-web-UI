<script>
    import { fade } from 'svelte/transition'
    import { navigateTo } from 'svelte-router-spa'

	import ProjectRow from '../../components/rows/ProjectRow.svelte';
	// export let currentRoute

	const preload = (async () => {
		const response = await fetch("http://localhost:3005/projects", {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			credentials: 'include'
		});

		if (response.status === 401) {
			return this.redirect(302, 'login');
		}

		return await response.json();
	})()
</script>


<style lang="scss">
	.projects-listing {
		max-width: 900px;
		margin: auto;
	}
</style>

<svelte:head>
	<title>Projects</title>
</svelte:head>

<!-- <h1>Recent projects</h1> -->

<div class="projects-listing pt-4" in:fade="{{ duration: 250 }}">
	{#await preload}
		<p>...spinner will be here one day...</p>
	{:then projects}
		{#each projects as project}
			<ProjectRow colorCode={project.colorCode} classNames="project-row-wrapper" title={project.title}  />
		{/each}
	{:catch error}
		{console.log(error)}
		<p>An error occurred!</p>
	{/await}

</div>
