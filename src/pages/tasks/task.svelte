<script>
	import { onMount } from 'svelte'
	import mapPriorityToColor from '../../helpers/_mapColorToTaskProperty.js';
	import TaskDetails from '../../components/task-details/TaskDetails.svelte';

	export let currentRoute

	let task = false

	const fetchTask = async () => {
		const response = await fetch(`http://localhost:3005/task/${currentRoute.namedParams.key}`, {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			credentials: 'include'
		})

		if (response.status === 401) {
			return this.redirect(302, 'login');
		}

		task = await response.json();
	}

	$: currentRoute && fetchTask()

</script>

<style lang="scss">
	// @import "../../sass/_variables";
</style>

<svelte:head>
	<title>{task.key} # {task.title}</title>
</svelte:head>

{#if task}
	<TaskDetails task={task} classNames="pt-4" />
{/if}
