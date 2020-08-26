<script>
    import { fade } from 'svelte/transition'
    import { Navigate, navigateTo } from 'svelte-router-spa'

	import mapPriorityToColor from '../../helpers/_mapColorToTaskProperty.js';
	import TaskRow from '../../components/rows/TaskRow.svelte';
	import NewTaskRow from '../../components/rows/NewTaskRow.svelte';

	import { Route } from 'svelte-router-spa'

	export let currentRoute
	export let handleTaskRowClick
	export let hasExpandedTaskDetails

	hasExpandedTaskDetails = currentRoute.path.includes('show')

	const params = {}

	const preload = (async () => {
		const response = await fetch("http://localhost:3005/tasks", {
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

	handleTaskRowClick = key => {
		// console.log('alsdjflkasdf')
		navigateTo(`tasks/show/${key}`)
		hasExpandedTaskDetails = true
	}
</script>

<svelte:head>
	<title>Tasks</title>
</svelte:head>
<!-- {console.log('hasExpandedTaskDetails')}
{console.log(hasExpandedTaskDetails)} -->
<div class="tasks-listing pt-4 {hasExpandedTaskDetails ? 'has-expanded-task' : ''}" in:fade="{{ duration: 250 }}">
	<h3 class="mb-3">List name here</h3>
	<div class="row ">
		<div class="col">
			{#await preload}
				<p>...spinner will be here one day...</p>
			{:then tasks}
				{#each tasks as task}
				<div on:click={handleTaskRowClick(task.key)}>
				<!-- <Navigate to="tasks/show/{task.key}" styles=""> -->
					<TaskRow

						colorCode={mapPriorityToColor(task.priority)}
						taskType={task.type}
						title={task.title}
						taskKey={task.key}
						dueAt={task.dueAt}
						assignees={task.assignees}
					/>
				<!-- </Navigate> -->
				</div>
				{/each}
			{:catch error}
				{console.log(error)}
				<p>An error occurred!</p>
			{/await}

			<NewTaskRow />
		</div>
		<!-- {console.log('currentRoute')}
		{console.log(currentRoute)}
		{console.log('params')}
		{console.log(params)} -->
		{#if currentRoute.path.includes('show')}
			<div class="col">
				<Route {currentRoute} {params} />
			</div>
		{/if}
	</div>


	<div class="mb-5"></div>
</div>

<style lang="scss">
	.tasks-listing {
		max-width: 900px;
		margin: auto;
	}
	.has-expanded-task {
		max-width: 98%;
	}
</style>
