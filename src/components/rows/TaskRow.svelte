<script>
    import ColorCodedRow from './ColorCodedRow.svelte';

    // export let segment;

    export let colorCode;
    export let title;
    export let taskKey;
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

    a {
        text-decoration: none;
        color: #000;
    }
    span.task-title, a.task-key, input {
        font-size: 1em;
    }
    .task-status {
        font-size: 1.1em;
        color: #8a8a8a;
        /*color: $code-green;*/
        &:hover {
            color: $code-green;
            transform:scale(1.3);
            -ms-transform:scale(1.3);
            -moz-transform:scale(1.3);
            -webkit-transform:scale(1.3);
            -o-transform:scale(1.3);
        }

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
        <div class="col-sm-auto task-status">
            <span class="icon-ok-circle"></span>
        </div>
        <div class="col-sm-auto">
            <span class="icon-hash"></span>
        </div>
        <div class="col-auto asdf">
            <a rel='prefetch' href='tasks/{taskKey}' class="task-key"><span>{taskKey}</span></a>
        </div>
        <!-- <div class="col-auto">
            <a rel='prefetch' href='tasks/{taskKey}' class="task-key"><span>{taskKey}</span></a>
        </div> -->
        <div class="col-sm-auto">
            <span class="vertical-divider"></span>
        </div>
        <div class="col-sm-auto">
            <span class="task-title">{title}</span>
        </div>
        <div class="col">
            <div class="row no-gutters align-items-center d-flex justify-content-end">
                <div class="col-sm-auto datepicker-container">
                    <span class="task-due">Apr/01/19</span>
                     <!-- <Calendar
                        date={new Date()}
                        onChange={this.handleSelect}
                    /> -->
                </div>
                <div class="col-sm-auto task-assignee-avatar">
                    <img class="avatar" src="system-images/avatar.jpg" alt="Kate" />
                </div>
                <div class="col-sm-auto">
                    <!-- <TaskAssignee isEditing={this.props.isEditing} selectedOption={selectedOption} handleChange={this.handleChange} /> -->
                    <span class="task-assignee">Kate Wilson</span>
                </div>
            </div>
        </div>
    </div>
</ColorCodedRow>
