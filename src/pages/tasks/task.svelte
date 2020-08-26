<!-- <script context="module">
	import TaskDetails from '../../components/task-details/TaskDetails.svelte';

	export async function preload({ params, query }) {
		const { taskKey } = params
		const response = await this.fetch(`http://localhost:3005/task/${taskKey}`, {
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

	    const task = await response.json();
	    return { task };
	}
</script>

<script>
	export let task
</script> -->

<script>
    // import { fade } from 'svelte/transition'
    // import { navigateTo } from 'svelte-router-spa'

	import mapPriorityToColor from '../../helpers/_mapColorToTaskProperty.js';
	import TaskDetails from '../../components/task-details/TaskDetails.svelte';
	export let currentRoute
	console.log(currentRoute)

	const preload = (async () => {
		console.log('responsffffe')
		const response = await fetch(`http://localhost:3005/task/${currentRoute.namedParams.key}`, {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			credentials: 'include'
		})
		console.log('response')
		console.log(response)
		//
		// if (response.status === 401) {
		// 	return this.redirect(302, 'login');
		// }

		const df =  await response.json();
		console.log('df')
		console.log(df)
		return df
	})()
</script>

<style lang="scss">
	// @import "../../sass/_variables";
</style>

<svelte:head>
	<title>{'task.key'} # {'task.title'}</title>
</svelte:head>

{#await preload}
	<p>...spinner will be here one day...</p>
{:then task}

	<TaskDetails task={task} classNames="pt-4" />

{:catch error}
	<p>An error occurred!</p>
{/await}
