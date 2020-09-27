<script>
	import { Route } from 'svelte-router-spa'
	import { fade } from 'svelte/transition'
	import { navigateTo } from 'svelte-router-spa'
	import mapPriorityToColor from '../../helpers/_mapColorToTaskProperty.js'
	import TaskRow from '../../components/rows/TaskRow.svelte'
	import NewTaskRow from '../../components/rows/NewTaskRow.svelte'

	import { taskData } from '../../stores/taskData.js'

	export let currentRoute
	export let hasExpandedTaskDetails

	let tasks = []

	const fetchTasks = async () => {
		const response = await fetch("http://localhost:3005/tasks", {
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

		tasks = await response.json()
	}
	$: currentRoute && fetchTasks()
	$: hasExpandedTaskDetails = currentRoute.path.includes('show') || currentRoute.path.includes('create')

	const createNewTask = async (newTaskdata) => {
		newTaskdata = {
			projectId: 1,
			...newTaskdata
		}
		const response = await fetch("http://localhost:3005/tasks", {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			credentials: 'include',
			body: JSON.stringify(newTaskdata)
		})

		if (response.status === 401) {
			return this.redirect(302, 'login')
		}

		const task = await response.json()

		taskData.set(task)
		$: tasks = [...tasks, task]
	}

	const params = {
		createNewTask
	}


	const handleTaskRowClick = key => {
		navigateTo(`tasks/show/${key}`)
		hasExpandedTaskDetails = true
	}

	const handleNewTaskRowClick = key => {
		navigateTo('tasks/create')
		hasExpandedTaskDetails = true
	}

</script>

<svelte:head>
	<title>Tasks</title>
</svelte:head>

<div class="tasks-listing pt-4 {hasExpandedTaskDetails ? 'has-expanded-task' : ''}" in:fade="{{ duration: 250 }}">
	<h3 class="mb-3">List name here</h3>

	<div class="row ">
		<div class="col">
				{#each tasks as task}
					<div on:click={handleTaskRowClick(task.key)}>
						<TaskRow
							colorCode={mapPriorityToColor(task.priority)}
							taskType={task.type}
							title={task.title}
							taskKey={task.key}
							dueAt={task.dueAt}
							assignees={task.assignees}
						/>
					</div>
				{/each}

				<div on:click={handleNewTaskRowClick}>
					<p>alsdfj</p>
					<NewTaskRow {createNewTask} />
				</div>
		</div>

		{#if currentRoute.path.includes('show')}
			<div class="col">
				<Route {currentRoute} {params} />
			</div>
		{/if}

		{#if currentRoute.path.includes('create')}
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
