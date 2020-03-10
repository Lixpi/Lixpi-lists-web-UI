<script context="module">
	import TaskDetails from '../../components/task-details/TaskDetails.svelte';

	export async function preload({ params, query }) {
		const { taskKey } = params
		const response = await this.fetch(`http://localhost:3001/task/${taskKey}`, {
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
</script>

<style lang="scss">
	// @import "../../sass/_variables";
</style>

<svelte:head>
	<title>{task.key} # {task.title}</title>
</svelte:head>

<TaskDetails task={task} classNames="pt-4" />


