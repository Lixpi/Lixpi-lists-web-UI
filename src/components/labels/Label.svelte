<script>
    export let color;
</script>

<style lang="scss">
@import "../../sass/_variables";

.label {
    border: 1px solid #000;
    background: lighten(#000, 9%);
    border-radius: 999px;
    margin-right: .4em;
    padding: .6em .4em .682em .4em;
    line-height: 0;
    display: inline-block;
    &:last-of-type {
        margin-right: 0;
    }
    // LIX-02 refactor when these issues will be ready
    // https://github.com/sveltejs/svelte/issues/758
    // https://github.com/sveltejs/svelte/issues/1550
    &.pink {
        border-color: #ffbdc9;
        background: #ffe9ed;
        color: #ff6882;
    }
    &.orange {
        border-color: #ffcb6c;
        background: #ffe4b3;
        color: #c17f05;
    }
    &.blue {
        border-color: #82bdf5;
        background: #aed6fb;
        color: #1f7fda;
    }
    &.green {
        border-color: #62c14c;
        background: #c0f9b4;
        color: #1c8603;
    }
    &.grey {
        border-color: #62c14c;
        background: #c0f9b4;
        color: #1c8603;
    }
}

</style>

<span class="label {color}">
    <slot></slot>
</span>