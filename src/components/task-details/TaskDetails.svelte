<script>
    import Labels from '../labels/Labels.svelte';
    import ColorCodedRow from '../rows/ColorCodedRow.svelte';
    import HorizontalDivider from '../HorizontalDivider.svelte';


    export let task;
    export let classNames;

</script>

<style lang="scss">
@import "../../sass/_variables";

.task-details {
    max-width: 960px;
    margin-right: auto;
    margin-left: auto;
    background: #fff;
    padding: 1em 1em;
    height: 100%;
}
.task-header {
    h2.project-title {
        /*font-weight: 300;*/
        span {
            color: #888;
        }
        i {
            color: #bdb9b9;
        }
    }
    :global(.task-details-meta-row) {
        padding: 0em 1em 0 1em;
    }
}
.assignees {
    .role {
        color: #9a9a9a;
    }
}
.project-logo {
    max-width: 32px;
    margin-right: 1.1em;
}

.content {
    font-size: 1.1em;
    line-height: 1.3;
}


</style>

<div class="task-details {classNames}">

    <div class="task-header">
        <div class="d-flex justify-content-start align-items-center mb-4">
            <img class="project-logo noselect" src="system-images/logo.png" alt="Lixpi Lists" />
            <h2 class="project-title"><span>{task.project} <i>/</i></span> {task.taskKey}</h2>
        </div>


        <ColorCodedRow colorCode={task.colorCode} classNames="no-hover task-details-meta-row">
            <h4 class="task-title mb-3"><span class="text-color-{task.colorCode} no-hover">{task.type}:</span> {task.title}</h4>

            <div class="row">
                <div class="col-sm">
                    <Labels labels={task.labels} classNames="mb-2" />
                    <p>Status: <b>{task.status}</b></p>
                    <p>Version: <b>{task.version}</b></p>
                    <p>Created: <b>{task.timestamps.created}</b></p>
                    <p>Due: <b>{task.timestamps.due}</b></p>

                    <p>Reporter: <b>{task.reporter}</b></p>

                </div>
                <div class="col-sm mt-2  mt-md-0">
                    <div class="row mb-2">
                        <div class="col-sm-2">
                            <p>Assignees:</p>
                        </div>
                        <div class="col-sm-auto">
                            <ul class="assignees">
                                {#each task.assignees as assignee}
                                <li><b>{assignee.name}</b><span class="role ml-1">[{assignee.role}]</span></li>
                                {/each}
                            </ul>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-2">
                            <p>Time:</p>
                        </div>
                        <div class="col-sm-auto">
                            <ul class="assignees">
                                <li>Estimated:<b class="ml-1">{task.timeTracking.estimated}</b></li>
                                <li>Spent:<b class="ml-1">{task.timeTracking.spent}</b></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>



        </ColorCodedRow>
    </div>

    <HorizontalDivider classNames="mt-3 mb-4" />

    <div class='content'>
        {@html task.html}
    </div>

</div>