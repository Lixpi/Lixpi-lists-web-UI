<script context="module">
	import Labels from '../../components/labels/Labels.svelte';
	import Label from '../../components/labels/Label.svelte';
	import ColorCodedRow from '../../components/rows/ColorCodedRow.svelte';

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
	@import "../../sass/_variables";
	/* Example styles ------------------------------------------------------------------------*/
	/*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{task.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/
	.content :global(h2) {
		font-size: 1.4em;
		font-weight: 500;
	}

	.content :global(pre) {
		background-color: #f9f9f9;
		box-shadow: inset 1px 1px 5px rgba(0,0,0,0.05);
		padding: 0.5em;
		border-radius: 2px;
		overflow-x: auto;
	}

	.content :global(pre) :global(code) {
		background-color: transparent;
		padding: 0;
	}

	.content :global(ul) {
		line-height: 1.5;
	}

	.content :global(li) {
		margin: 0 0 0.5em 0;
	}
	/* END Example styles ------------------------------------------------------------------------*/

	.task-details {
		max-width: 960px;
		margin-right: auto;
		margin-left: auto;
	}
	.task-header {
		h4 span {
			color: $dark-asphalt-wet;
		}
	}
	.project-logo {
		max-width: 20px;
		margin-right: .5em;
	}

</style>

<svelte:head>
	<title>{task.title}</title>
</svelte:head>

<div class="task-details mt-4">

	<div class="task-header">
		<div class="d-flex justify-content-start align-items-center mb-2">
			<img class="project-logo" src="system-images/logo.png" alt="Lixpi Lists" />
			<h4><span>{task.project} /</span> {task.taskKey}</h4>
		</div>


		<ColorCodedRow colorCode={task.colorCode} classNames="pl-3">
			<h3>{task.title}</h3>

			<Labels>
				{#each task.labels as label}
				<Label color={label.color}>{label.title}</Label>
				{/each}
			</Labels>
		</ColorCodedRow>
	</div>


	<div class='content'>
		{@html task.html}
	</div>


</div>


