<script>
	import { Route } from 'svelte-router-spa'
	import { fade } from 'svelte/transition'
	import { navigateTo } from 'svelte-router-spa'
	import mapPriorityToColor from '../../helpers/_mapColorToTaskProperty.js'
	import TaskRow from '../../components/rows/TaskRow.svelte'
	import NewTaskRow from '../../components/rows/NewTaskRow.svelte'

	import { taskData } from '../../stores/taskData.js'
	import { typesData } from '../../stores/typesData.js'
	import { statusesData } from '../../stores/statusesData.js'
	import { prioritiesData } from '../../stores/prioritiesData.js'
	import { labelsData } from '../../stores/labelsData.js'
	import { versionsData } from '../../stores/versionsData.js'
	import { usersData } from '../../stores/usersData.js'

	export let currentRoute
	export let hasExpandedTaskDetails

	let tasks = []

	const fetchTypes = async () => {
		const response = await fetch("http://localhost:3005/types", {
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

		const types = await response.json()
		typesData.set(types)
	}
	fetchTypes()

	const fetchStatuses = async () => {
		const response = await fetch("http://localhost:3005/statuses", {
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

		const statuses = await response.json()
		statusesData.set(statuses)
	}
	fetchStatuses()

	const fetchPriorities = async () => {
		const response = await fetch("http://localhost:3005/priorities", {
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

		const priorities = await response.json()
		prioritiesData.set(priorities)
	}
	fetchPriorities()

	const fetchLabels = async () => {
		const response = await fetch("http://localhost:3005/labels", {
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

		const labels = await response.json()
		labelsData.set(labels)
	}
	fetchLabels()

	const fetchVersions = async () => {
		const response = await fetch("http://localhost:3005/versions", {
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

		const versions = await response.json()
		versionsData.set(versions)
	}
	fetchVersions()

	const fetchUsers = async () => {
		const response = await fetch("http://localhost:3005/users", {
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

		const users = await response.json()
		usersData.set(users)
	}
	fetchUsers()


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

	const createNewTask = async (newTaskdata, navigateToNewTaskAfter) => {
		console.log('taskData')
		console.log($taskData)
		newTaskdata = {
			projectId: 1,
			...$taskData
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

		const createdTask = await response.json()

		tasks = [...tasks, createdTask]

		if (navigateToNewTaskAfter) {
			taskData.set(createdTask)
			handleTaskRowClick(createdTask.key)
		} else {
			taskData.set({})
		}
	}

	const params = {
		createNewTask
	}


	const handleTaskRowClick = key => {
		navigateTo(`tasks/show/${key}`)
		hasExpandedTaskDetails = true
	}

	const handleNewTaskRowClick = key => {
		if (currentRoute.path.includes('show')) {
			taskData.set({})
		}
		navigateTo('tasks/create')
		hasExpandedTaskDetails = true
	}

</script>

<svelte:head>
	<title>Tasks</title>
</svelte:head>

<div class="tasks-listing pt-4 {hasExpandedTaskDetails ? 'has-expanded-task' : ''}" in:fade="{{ duration: 250 }}">
	<!-- <h3 class="mb-3">List name here</h3> -->

	<div class="container ">
		<div class="row ">
			<div class="col scroll-container">
				<div class="scroll-content">
					{#each tasks as task}
						<div on:click={handleTaskRowClick(task.key)}>
							<TaskRow
								colorCode={mapPriorityToColor(task.priority)}
								taskStatus={task.status && task.status.title}
								taskType={task.type}
								title={task.title}
								taskKey={task.key}
								dueAt={task.dueAt}
								assignees={task.assignees}
							/>
						</div>
					{/each}

					<div on:click={handleNewTaskRowClick}>
						<!-- <p>Create new task</p> -->
						<NewTaskRow {createNewTask} isActive={currentRoute.path.includes('create') && true} />
					</div>
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
	</div>
	<!-- <div class="mb-5"></div> -->
</div>

<style lang="scss">
	.container {
		max-width: 100%;
	}
	.tasks-listing {
		max-width: 900px;
		margin: auto;
		// display: flex;
		// flex-direction: column;
	}
	.has-expanded-task {
		max-width: 100%;
	}
</style>
