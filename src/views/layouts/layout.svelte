<script>
    import { Route } from "svelte-router-spa";
    import Nav from '../../components/top-navbar/nav.svelte';

    export let currentRoute
    export let segment;

    const params = {}
</script>

<style global lang="scss">
    @import '../../../node_modules/bootstrap-4-grid/scss/grid.scss';
    @import '../../sass/styles.scss';
</style>

<div class="full-height">
    {#if !currentRoute.path.includes('login')}
        <Nav {segment}/>
    {/if}

    <main>
        <Route {currentRoute} {params} />
    </main>
</div>
