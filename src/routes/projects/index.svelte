<script context="module">
	import ProjectRow from '../../components/rows/ProjectRow.svelte';
	// import NewProjectRow from '../../components/rows/NewProjectRow.svelte';

	export function preload({ params, query }) {
		return this.fetch(`projects.json`).then(r => r.json()).then(projects => {
			return { projects };
		});
	}
</script>

<script>
	export let projects;
</script>

<style>

</style>

<svelte:head>
	<title>Projects</title>
</svelte:head>

<!-- <h1>Recent projects</h1> -->

<div class="projects-listing mt-4">
	{#each projects as project}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<!-- <li><a rel='prefetch' href='projects/{project.slug}'>{project.title}</a></li> -->
		<ProjectRow colorCode={project.colorCode} title={project.title}  />
	{/each}
	<!-- <NewProjectRow /> -->
</div>