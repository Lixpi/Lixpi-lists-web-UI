<script>
    // export let segment;

    export let colorCode;
    export let classNames;
</script>

<style lang="scss">
@import "../../sass/_variables";

.color-coded-row {
    background: #fff;
    margin-right: auto;
    margin-left: auto;
    max-width: 900px;
    border-radius: 3px;
    -webkit-box-shadow: 0 0 7px 0 rgba(0,0,0,.02);
    box-shadow: 0 0 7px 0 rgba(0,0,0,.02);
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
        background: $red;
    }
    &.code-red {
        &:before {
            background: $code-red;
        }
        &:hover {
            background: $code-red-hover;
        }
    }
    &.code-yellow {
        &:before {
            background: $code-yellow;
        }
        &:hover {
            background: $code-yellow-hover;
        }
    }
    &.code-green {
        &:before {
            background: $code-green;
        }
        &:hover {
            background: $code-green-hover;
        }
    }
    &.code-grey {
        &:before {
            background: $code-grey;
        }
        &:hover {
            background: $code-grey-hover;
        }
    }
}

</style>


<div class="color-coded-row code-{colorCode} {classNames}">
    <slot></slot>
</div>
