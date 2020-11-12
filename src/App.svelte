<script>
	import { Router } from 'svelte-router-spa'
	import { routes } from './routes'

	export let name;
</script>


<main>
	<Router {routes} />
	<!-- <div>without this extra div transition fails, I'll figure out this later....</div> -->
</main>
