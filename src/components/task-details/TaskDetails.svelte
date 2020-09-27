<script context="module">
    import moment from 'moment'
    import mapPriorityToColor from '../../helpers/_mapColorToTaskProperty.js';
    import Labels from '../labels/Labels.svelte';
    import ColorCodedRow from '../rows/ColorCodedRow.svelte';
    import HorizontalDivider from '../HorizontalDivider.svelte';
    import config from '../../config.js'
</script>

<script>
    const { dateFormat } = config
    export let task
    export let classNames
</script>

<div class="task-details {classNames}">
    <div class="task-header">
        <div class="d-flex justify-content-start align-items-center mb-4">
            <img class="project-logo noselect" src="/system-images/logo.png" alt="{task.project.title}" />
            <h2 class="project-title"><span>{task.project.title} <i>/</i></span> {task.key}</h2>
        </div>
        <ColorCodedRow colorCode={mapPriorityToColor(task.priority.title)} classNames="no-hover task-details-meta-row">
            <h4 class="task-title mb-3">
                <!-- <span class="text-color-{mapPriorityToColor(task.priority.title)} no-hover">{task.type.title}:</span>  -->
                {task.title}
            </h4>
            <div class="row">
                <div class="col-sm">
                    {#if task.labels && task.labels.length}
                        <Labels labels={task.labels} classNames="mb-2" />
                    {/if}
                    <p>Status: <b>{task.status.title}</b></p>
                    <p>Version: <b>{task.version}</b></p>
                    <p>Priority: <b class="text-color-{mapPriorityToColor(task.priority.title)}">{task.priority.title}</b></p>
                    <p>Reporter: <b>{task.author.username}</b></p>
                </div>
                <div class="col-sm mt-2  mt-md-0">
                    <div class="row mb-2">
                        <div class="col-sm-2">
                            <p>Assignees:</p>
                        </div>
                        <div class="col-sm-auto">
                            <ul class="assignees">
                                {#if task.assignees && task.assignees.length}
                                    {#each task.assignees as assignee}
                                    <li><b>{assignee.username}</b><span class="role ml-1">[{assignee.assigneeRoleTitle}]</span></li>
                                    {/each}
                                {/if}
                            </ul>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-2">
                            <p>Time:</p>
                        </div>
                        <div class="col-sm-auto">
                            <ul class="assignees">
                                <li>Estimated:<b class="ml-1">{task.timeEstimated}</b></li>
                                <li>Spent:<b class="ml-1">{task.timeSpent}</b></li>
                                <li>Created: <b>{moment(task.createdAt).format(dateFormat)}</b></li>
                                <li>Due: <b>{moment(task.dueAt).format(dateFormat)}</b></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </ColorCodedRow>
    </div>

    <HorizontalDivider classNames="mt-3 mb-4" />

    <div class='content'>
        {@html task.description}
    </div>
</div>

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
