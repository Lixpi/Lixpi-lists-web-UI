<script>
	import { Route } from 'svelte-router-spa'
  import { fade } from 'svelte/transition'
  import { navigateTo } from 'svelte-router-spa'
  import ProjectRow from '../../components/rows/ProjectRow.svelte';

	export let currentRoute
	export let handleTaskRowClick
	export let hasExpandedTaskDetails

	let projects = []

	const fetchProjects = async () => {
		const response = await fetch("http://localhost:3005/projects", {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			credentials: 'include'
		})

		if (response.status === 401) {
			return this.redirect(302, 'login')
		}

		projects = await response.json()
	}
	$: currentRoute && fetchProjects()

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

<div class="projects-listing pt-4" in:fade="{{ duration: 250 }}">

	{#each projects as project}
		<ProjectRow colorCode={project.colorCode} classNames="project-row-wrapper" title={project.title}  />
	{/each}

</div>
