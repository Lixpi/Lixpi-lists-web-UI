<script context="module">
    import Nav from '../components/top-navbar/Nav.svelte';
</script>

<script>
	export let segment;
</script>

<style global lang="scss">
    @import '../../node_modules/bootstrap-4-grid/scss/grid.scss';
    @import '../sass/styles.scss';
</style>

<div class="full-height">
    {#if segment !== 'login'}
        <Nav {segment}/>
    {/if}

    <main>
        <slot></slot>
    </main>
</div>