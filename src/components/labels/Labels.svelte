<script>
    import Label from '../labels/Label.svelte'

    export let labels
    export let classNames
</script>

<div class="labels {classNames}">
    <slot>
        {#each labels as label}
            <Label color={label.color}>{label.title}</Label>
        {/each}
    </slot>
</div>

<style lang="scss">
    @import "../../sass/_variables";

    /*.labels {
        margin: 1em 0;
    }*/
</style>
