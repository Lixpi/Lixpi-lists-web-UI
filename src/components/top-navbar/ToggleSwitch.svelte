<script>
    export let segment;
</script>

<style lang="scss">
@import "../../sass/_variables";

.switch {
    // border: 1px solid red;
    position: relative;
    width: 43px;
    transform: translate(0, 2px);
    &:before, .switch-icon-container { // common properties for rail and knob
        position: absolute;
        transform: translate(-50%, -50%);
        top: 50%;
        text-align: center;
        border-radius: 999px;
    }
    &:before { // rail
        content: "";
        display: block;
        width: 100%;
        height: 10px;
        background: #78828a;
        z-index: 4;
        left: 50%;
        -webkit-box-shadow: 0 0 7px 0 rgba(0,0,0,.9);
        box-shadow: 0 0 7px 0 rgba(0,0,0,.9);
    }
    .switch-icon-container { // knob
        left: 10px;
        width: 28px;
        height: 28px;
        font-size: .9em;
        line-height: 28px;
        z-index: 5;
        background: $dark-asphalt-wet;
        vertical-align: middle;

        -webkit-box-shadow: 0 0 9px 0 rgba(0,0,0,.6);
        box-shadow: 0 0 9px 0 rgba(0,0,0,.6);
    }
}

</style>


<div class="switch">
    <span class="switch-icon-container">
        <span class="icon-tasks"></span>
    </span>
</div>
