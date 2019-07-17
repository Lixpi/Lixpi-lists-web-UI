<script>
	import Nav from '../components/top-navbar/Nav.svelte';

	export let segment;
</script>

<style global lang="scss">
    @import '../../node_modules/bootstrap-4-grid/scss/grid.scss';
    @import '../sass/styles.scss';
</style>




 <div class="container full-height">
    <Nav {segment}/>

	<main>
		<slot></slot>
	</main>
</div>