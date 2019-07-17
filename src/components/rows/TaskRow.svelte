<script>
    import ColorCodedRow from './ColorCodedRow.svelte';

    // export let segment;

    export let colorCode;
    export let taskType;
    export let title;
</script>

<style lang="scss">
@import "../../sass/_variables";



.task-row {
    padding: 5px 7px 5px $task-color-coded-row-border-size + 2px;
    margin-bottom: .4em;
    font-size: 1.1em;
    cursor: pointer;
    &:before {
        width: $task-color-coded-row-border-size;
    }

    span.task-title, span.task-key, input {
        font-size: 1em;
    }

    .task-status {
        font-size: 1.1em;
        color: #757575; // TBM

    }
    span.icon-hash {
        color: $light-grey;
        margin: 0 .13em 0 .3em;
        &:before {
            margin: 0;
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
    .vertical-divider {
        display: block;
        height: 1.3em;
        width: 1px;
        background: $light-grey;
        margin: 0 .7em;
    }
    span.task-due {
        margin: 0 .5em;
    }
    .task-assignee-avatar {
        img {
            border-radius: 999px;
            width: 20px;
            height: 20px;
            // height: auto;
            margin-right: .2em;
        }

    }
    &.new-task-input {
        &:hover {
            background: #fff;
        }
        input[type="text"] {
            // border: 1px solid orange;
            font-size: 1em;
            width: 100%;
        }
    }
}

</style>


<ColorCodedRow colorCode={colorCode}>
    <div class="row no-gutters align-items-center task-row">
        <div class="col-md-auto task-status">
            <span class="icon-{taskType}"></span>
        </div>
        <div class="col-md-auto">
            <span class="icon-hash"></span>
        </div>
        <div class="col-md-auto">
            <span class="task-key">ICC-215</span>
        </div>
        <div class="col-md-auto">
            <span class="vertical-divider"></span>
        </div>
        <div class="col-md-auto">
            <span class="task-title">{title}</span>
        </div>
        <div class="col">
            <div class="row no-gutters align-items-center d-flex justify-content-end">
                <div class="col-md-auto datepicker-container">
                    <span class="task-due">Apr/01/19</span>
                     <!-- <Calendar
                        date={new Date()}
                        onChange={this.handleSelect}
                    /> -->
                </div>
                <div class="col-md-auto task-assignee-avatar">
                    <img class="avatar" src="system-images/avatar.jpg" alt="Kate" />
                </div>
                <div class="col-md-auto">
                    <!-- <TaskAssignee isEditing={this.props.isEditing} selectedOption={selectedOption} handleChange={this.handleChange} /> -->
                    <span class="task-assignee">Kate Wilson</span>
                </div>
            </div>
        </div>
    </div>
</ColorCodedRow>
