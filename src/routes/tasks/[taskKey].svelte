<script context="module">
	import TaskDetails from '../../components/task-details/TaskDetails.svelte';

	export async function preload({ params, query }) {
		// the `taskKey` parameter is available because
		// this file is called [taskKey].svelte
		const res = await this.fetch(`tasks/${params.taskKey}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { task: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	export let task;
</script>

<style lang="scss">
// @import "../../sass/_variables";

</style>

<svelte:head>
	<title>{task.taskKey} # {task.title}</title>
</svelte:head>

<TaskDetails task={task} classNames="pt-4" />


