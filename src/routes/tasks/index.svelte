<script context="module">
	import TaskRow from '../../components/tasks/TaskRow.svelte';

	export function preload({ params, query }) {
		return this.fetch(`tasks.json`).then(r => r.json()).then(tasks => {
			return { tasks };
		});
	}
</script>

<script>
	export let tasks;
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
</style>

<svelte:head>
	<title>Tasks</title>
</svelte:head>

<!-- <h1>Recent tasks</h1> -->

<div class="taksk-listing mt-4">
	{#each tasks as task}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<!-- <li><a rel='prefetch' href='tasks/{task.slug}'>{task.title}</a></li> -->
		<TaskRow colorCode={task.colorCode} taskType={task.taskType} title={task.title}  />
	{/each}
</div>