<script>
    import moment from 'moment'
    import Datepicker from 'svelte-calendar'

    import Select from '../inputs/select.svelte'

    import mapPriorityToColor from '../../helpers/_mapColorToTaskProperty.js'
    import Labels from '../labels/Labels.svelte'
    import ColorCodedRow from '../rows/ColorCodedRow.svelte'
    import HorizontalDivider from '../HorizontalDivider.svelte'
    import config from '../../config.js'

    import { taskData } from '../../stores/taskData.js'
    import { typesData } from '../../stores/typesData.js'
    import { statusesData } from '../../stores/statusesData.js'
    import { prioritiesData } from '../../stores/prioritiesData.js'
    import { labelsData } from '../../stores/labelsData.js'
    import { versionsData } from '../../stores/versionsData.js'
    import { usersData } from '../../stores/usersData.js'

    // export let task
    export let classNames
    export let createNewTask

    const { dateFormat } = config

    const types = $typesData.map(type => ({ value: type.id, label: type.title }))
    let selectedType = $taskData.type && types.find(type => type.value === $taskData.type.id)
    $: $taskData.type = selectedType && {id: selectedType.value, title: selectedType.label}

    const labels = $labelsData.map(label => ({ value: label.id, color: label.color, label: label.title }))
    let selectedLabel = $taskData.labels && labels.filter(label => $taskData.labels.find(taskLabel => taskLabel.id === label.value))
    $: $taskData.labels = selectedLabel && selectedLabel.map(label => ({id: label.value, title: label.label}))

    const statuses = $statusesData.map(status => ({ value: status.id, label: status.title }))
    let selectedStatus = $taskData.status && statuses.find(status => status.value === $taskData.status.id)
    $: $taskData.status = selectedStatus && {id: selectedStatus.value, title: selectedStatus.label}

    const versions = $versionsData.map(version => ({ value: version.id, color: version.color, label: version.title }))
    let selectedVersion = $taskData.versions && versions.filter(verision => $taskData.versions.find(taskLabel => taskLabel.id === verision.value))
    $: $taskData.versions = selectedVersion && selectedVersion.map(version => ({id: version.value, title: version.label}))

    const priorities = $prioritiesData.map(priority => ({ value: priority.id, label: priority.title }))
    let selectedPriority = $taskData.priority && priorities.find(priority => priority.value === $taskData.priority.id)
    $: $taskData.priority = selectedPriority && {id: selectedPriority.value, title: selectedPriority.label}

    const users = $usersData.map(user => ({ value: user.id, avatar: user.avatar, label: user.username }))
    let selectedAssignee = $taskData.assignees && users.filter(users => $taskData.assignees.find(taskAssignee => taskAssignee.userId === users.value))
    $: $taskData.assignees = selectedAssignee && selectedAssignee.map(user => ({
        userId: user.value,
        username: user.label,
        assigneeRoleId: 1,
        assigneeRoleTitle: 'developer'
    }))

    let selectedDueAt = moment($taskData.dueAt)._d
    $: $taskData.dueAt = moment(selectedDueAt).format(dateFormat)


    const onKeyPress = e => {
        if (e.charCode === 13 && e.target.value !== '') {
            createNewTask($taskData, true)
        }
    };

</script>



<div class="task-details {classNames}">
    <div class="task-header">
        <div class="d-flex justify-content-start align-items-center mb-4">
            <img class="project-logo noselect" src="/system-images/logo.png" alt="task.project.title" />
            {#if $taskData.project}
                <h5 class="project-title"><span>{$taskData.project.title} <i>/</i></span> {$taskData.key}</h5>
            {/if}
        </div>
        <div class="d-flex justify-content-start align-items-center mb-4">
            <!-- <img class="project-logo noselect" src="/system-images/logo.png" alt="task.project.title" /> -->
            <input class="task-title" type="text" name="task-title" placeholder="Start typing new task title here" bind:value={$taskData.title} on:keypress={onKeyPress} />
            <!-- <h2 class="project-title"><span>task.project.title <i>/</i></span> task.key</h2> -->
        </div>
        <ColorCodedRow colorCode={mapPriorityToColor('task.priority.title')} classNames="no-hover task-details-meta-row">
            <div class="row align-items-center no-gutters">
                <div class="col-auto">
                    <b class="mr-2">Type: </b>
                </div>
                <div class="col-auto">
                    <!-- <span class="text-color-{mapPriorityToColor('task.priority.title')} no-hover">task.type.title:</span> -->
                    <Select
                        items={types}
                        bind:selectedValue={selectedType}
                        isMulti={false}
                        isCreatable={false}
                        isClearable={false}
                        clickToEdit={false}
                        clickToEditRefactorMeLater={false}
                    />
                </div>
                <!-- <div class="col">
                    <input type="text" name="new-task" placeholder="New task" bind:value={$taskData.title} />
                </div> -->
            </div>
            <!-- <h4 class="task-title mb-3">

            </h4> -->
            <div class="row">
                <div class="col-sm">
                    <!-- <Labels labels={'task.labels'} classNames="mb-2" /> -->
                    <div class="row align-items-center no-gutters">
                        <div class="col-auto">
                            <b class="mr-2">Labels: </b>
                        </div>
                        <div class="col-auto">
                            <Select
                                items={labels}
                                bind:selectedValue={selectedLabel}
                                isMulti={true}
                                isCreatable={true}
                                isClearable={true}
                            />
                        </div>
                    </div>

                    <!-- <p>Status: <b>{'task.status.title'}</b></p> -->
                    <div class="row align-items-center no-gutters">
                        <div class="col-auto">
                            <b class="mr-2">Status: </b>
                        </div>
                        <div class="col-auto">
                            <Select
                                items={statuses}
                                bind:selectedValue={selectedStatus}
                                isMulti={false}
                                isCreatable={false}
                                isClearable={false}
                                clickToEdit={false}
                                clickToEditRefactorMeLater={false}
                            />
                        </div>
                    </div>


                    <!-- <p>Version: <b>{'task.version'}</b></p> -->
                    <div class="row align-items-center no-gutters">
                        <div class="col-auto">
                            <b class="mr-2">Version: </b>
                        </div>
                        <div class="col-auto">
                            <Select
                                items={versions}
                                bind:selectedValue={selectedVersion}
                                isMulti={true}
                                isCreatable={true}
                                isClearable={true}
                            />
                        </div>
                    </div>

                    <!-- <p>Priority: <b class="text-color-{mapPriorityToColor('task.priority.title')}">{'task.priority.title'}</b></p> -->
                    <div class="row align-items-center no-gutters">
                        <div class="col-auto">
                            <b class="mr-2">Priority: </b>
                        </div>
                        <div class="col-auto">
                            <Select
                                items={priorities}
                                bind:selectedValue={selectedPriority}
                                isMulti={false}
                                isCreatable={false}
                                isClearable={false}
                                clickToEdit={false}
                                clickToEditRefactorMeLater={false}
                            />
                        </div>
                    </div>

                    <p>Reporter: <b>{'current user'}</b></p>

                </div>
                <div class="col-sm mt-2  mt-md-0">
                    <div class="row mb-2">
                        <div class="col-sm-2">
                            <p>Assignees:</p>
                        </div>
                        <div class="col-sm-auto">
                            <Select
                                items={users}
                                bind:selectedValue={selectedAssignee}
                                isMulti={true}
                                isCreatable={false}
                                isClearable={true}
                            />
                            <ul class="assignees">
                                <!-- {#each task.assignees as assignee}
                                <li><b>{assignee.username}</b><span class="role ml-1">[{assignee.assigneeRoleTitle}]</span></li>
                                {/each} -->
                            </ul>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-2">
                            <p>Time:</p>
                        </div>
                        <div class="col-sm-auto">
                            <ul class="assignees">
                                <!-- <li>Estimated:<b class="ml-1">{task.timeTracking.estimated}</b></li> -->
                                <!-- <li>Spent:<b class="ml-1">{task.timeTracking.spent}</b></li> -->
                                <!-- <li>Created: <b>{moment(task.timestamps.createdAt).format(dateFormat)}</b></li> -->
                                <!-- <li>Due: <b>{moment(task.dueAt).format(dateFormat)}</b></li> -->
                                <li>Due: </li>
                                <Datepicker
                                    bind:selected={selectedDueAt}
                                />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </ColorCodedRow>
    </div>

    <HorizontalDivider classNames="mt-3 mb-4" />

    <div class='content'>
        <!-- {@html task.description} -->
        <textarea id="description" name="description" rows="4" cols="50" bind:value={$taskData.description} ></textarea>
    </div>
</div>

<style lang="scss">
    @import "../../sass/_variables";

    .themmed-svelte-select {
      --multiItemMargin: 0 3px 0 0;
      --multiSelectPadding: 0;
      --border: none;
      --disabledBackground: transparent;
      --disabledColor: $main-text-color;
      --multiItemDisabledHoverColor: $main-text-color;
      // --borderRadius: 10px;
      // --placeholderColor: blue;
      // border: 1px solid red;
    }

    .task-title {
        font-size: 1.3em;
        // border: 1px solid #a79595;
        width: 100%;
        display: inline-block;
        border-radius: 3px;
    }

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
        textarea {
            width: 100%;
            min-height: 200px;
        }
    }
</style>
