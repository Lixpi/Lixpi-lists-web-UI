<script>
import Select from 'svelte-select'

export let items
export let selectedValue
export let clickToEdit = true
export let clickToEditRefactorMeLater = true
export let isMulti = false
export let isSearchable = true
export let isCreatable = false
export let isClearable = true
export let showIndicator = false
export let props = {}


let selectInputRef

const handleEditLabelsClick = () => clickToEdit = false

function handleWindowClick(event) {
    if (!clickToEditRefactorMeLater) return
    if (!selectInputRef) return
    const eventTarget = event.path && event.path.length > 0 ? event.path[0] : event.target
    if (!event.path.includes(selectInputRef)) {
        clickToEdit = true
    }
}
</script>

<svelte:window on:click={handleWindowClick} />

<div class="themmed-svelte-select" on:click={handleEditLabelsClick} bind:this={selectInputRef} >
    <Select
        {...props}
        {items}
        {isMulti}
        {isCreatable}
        {isSearchable}
        {isClearable}
        {showIndicator}
        bind:selectedValue
        bind:isDisabled={clickToEdit}
    ></Select>
</div>

<style lang="scss">
    @import "../../sass/_variables";

    .themmed-svelte-select {
        --padding: 0;
        --multiItemMargin: 0 3px 0 0;
        --multiSelectPadding: 0;
        --border: none;
        --disabledBackground: transparent;
        --disabledColor: $main-text-color;
        --multiItemDisabledHoverColor: $main-text-color;
        :global(.selectContainer) {
            padding: 0;
        }
    }
</style>
