<script>
    import ColorCodedRow from './ColorCodedRow.svelte';

    // export let segment;

    export let colorCode;
    // export let taskType;
    // export let title;
</script>

<style lang="scss">
@import "../../sass/_variables";
@import "../../sass/_helpers";

.project-row {
    padding: 10px 7px 10px $project-color-coded-row-border-size + 7px;
    .project-logo {
        img {
            width: 30px;
        }
        span {
            display: block;
            border: 2px solid $dark-asphalt;
            color: $dark-asphalt-wet;
            width: 30px;
            height: 30px;
            text-align: center;
            border-radius: 999px;
            font-size: 1.2em;
            line-height: 1.3em;
            font-weight: 700;
            vertical-align: middle;
            @extend .noselect;
        }
    }
    h4.project-name {
        font-weight: 600;
    }
    p {
        margin-bottom: .4em;
        &:last-of-type {
            margin-bottom: 0;
        }
    }
}
</style>


<ColorCodedRow colorCode={colorCode} classNames="no-hover mb-3 project-row-wrapper">
    <div class="row no-gutters align-items-center project-row mb-2">
        <div class="col">
            <div class="row no-gutters align-items-center">
                <div class="col-md-auto project-logo">
                    <img class="" src="system-images/logo.png" alt="Lixpi Lists" />
                </div>
                <div class="col-md-auto">
                    <h4 class="project-name ml-2">Lixpi Lists Project</h4>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="row no-gutters align-items-center">
                <div class="col-md-auto">
                    <h4><span class="icon-hash"/>765 open / 200 done</h4>
                </div>
            </div>
        </div>
    </div>
    <div class="row no-gutters align-items-center">
        <div class="col">
            <p><span class="icon-user"/>Lead: John Doe</p>
            <p><span class="icon-flow-cascade"/>Next release: Mar 17</p>
        </div>
        <div class="col">
            <p><span class="icon-clock"/>Duration: 1w</p>
            <p><span class="icon-attention"/>3: issues requires your attention</p>
        </div>
    </div>

</ColorCodedRow>
