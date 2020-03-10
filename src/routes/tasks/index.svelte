<script context="module">
	export async function preload({ params, query }) {
		const response = await this.fetch("http://localhost:3001/tasks", {
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

	    const tasks = await response.json();
	    return { tasks };
	}
</script>

<script>
	import { fade } from 'svelte/transition';
	import mapPriorityToColor from '../../helpers/_mapColorToTaskProperty.js';

	import TaskRow from '../../components/rows/TaskRow.svelte';
	import NewTaskRow from '../../components/rows/NewTaskRow.svelte';

	export let tasks;
</script>

<style lang="scss">
	.tasks-listing {
		max-width: 900px;
		margin: auto;
	}
</style>

<svelte:head>
	<title>Tasks</title>
</svelte:head>

<div class="tasks-listing pt-4" in:fade="{{ duration: 250 }}">
	{#each tasks as task}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<!-- <li><a rel='prefetch' href='tasks/{task.slug}'>{task.title}</a></li> -->
		<!-- <TaskRow colorCode={task.colorCode} taskType={task.taskType} title={task.title} taskKey={task.taskKey}  /> -->
		<TaskRow colorCode={mapPriorityToColor(task.priority)} taskType={task.type} title={task.title} taskKey={task.key} dueAt={task.dueAt} assignees={task.assignees} />
	{/each}
	<NewTaskRow />
</div>