<script>
    export let colorCode;
    export let classNames;
</script>

<style lang="scss">
@import "../../sass/_variables";

.color-coded-row {
    background: #fff;
    -webkit-box-shadow: 0 0 7px 0 rgba(0,0,0,.02);
    box-shadow: 0 0 7px 0 rgba(0,0,0,.02);
    /*box-shadow: 0px 2px 1px 0 rgba(0,0,0,.09);*/   // TODO version with no BG and shadow as a divider
    position: relative;
    padding-left: $color-coded-row-border-size;
    &:before {
        content: "";
        display: block;
        width: $color-coded-row-border-size;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: $code-grey;
    }
    &:after {
        content: "";
        display: block;
        width: 100%;
        height: 1px;
        position: absolute;
        bottom: -4px;
        /*bottom: 0px;*/
        left: 0;
        /*background: #d6d6d6;*/
    }
    // TODO refactor this ugly hack when JS variables in styles will be ready
    // https://github.com/sveltejs/svelte/issues/758
    &.project-row-wrapper {
        &:before {
            width: $project-color-coded-row-border-size;
        }
    }
    &.task-row-wrapper {
        &:before {
            width: $task-color-coded-row-border-size;
        }
    }
    &.code-red {
        &:before {
            background: $code-red;
        }
        &:not(.no-hover):hover {
            background: $code-red-hover;
        }
    }
    &.code-yellow {
        &:before {
            background: $code-yellow;
        }
        &:not(.no-hover):hover {
            background: $code-yellow-hover;
        }
    }
    &.code-green {
        &:before {
            background: $code-green;
        }
        &:not(.no-hover):hover {
            background: $code-green-hover;
        }
    }
    &.code-grey {
        &:before {
            background: $code-grey;
        }
        &:not(.no-hover):hover {
            background: $code-grey-hover;
        }
    }
}
</style>

<div class="color-coded-row code-{colorCode} {classNames}">
    <slot></slot>
</div>
