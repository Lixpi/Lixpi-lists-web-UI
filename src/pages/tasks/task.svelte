<script>
	import { onMount } from 'svelte'
	import mapPriorityToColor from '../../helpers/_mapColorToTaskProperty.js'
	import TaskDetails from '../../components/task-details/TaskDetails.svelte'
	import TaskDetailsEdit from '../../components/task-details/TaskDetailsEdit.svelte'
	import { taskData } from '../../stores/taskData.js'

	export let currentRoute
	export let params

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
			return this.redirect(302, 'login')
		}

		task = await response.json()
		taskData.set(task)
	}

	$: currentRoute && fetchTask()

</script>

<style lang="scss">
	// @import "../../sass/_variables";
</style>

<svelte:head>
	<title>{$taskData.key} # {$taskData.title}</title>
</svelte:head>

{#if task}
	{#if task.key === 'PAR-1'}
		<TaskDetails task={task} classNames="pt-4" />
	{:else}
		<TaskDetailsEdit task={task} createNewTask={params.createNewTask} classNames="pt-4" />
	{/if}


{/if}
