<script>
    import moment from 'moment';
    import ColorCodedRow from './ColorCodedRow.svelte'
    export let createNewTask

    let newTaskTitle = ''

    const onKeyPress = e => {
      if (e.charCode === 13 && e.target.value !== '') {
        createNewTask(e.target.value)
        newTaskTitle = ''
      }

    };
</script>

<ColorCodedRow colorCode={'grey'} classNames="task-row-wrapper">
    <div class="row no-gutters align-items-center task-row new-task-input">
        <!-- <div class="col-md-auto">
            <span class="icon-hash"></span>
        </div> -->
        <div class="col">
            <!-- <span class="task-title">Regular priority task</span> -->
            <input type="text" name="new-task" placeholder="New task" bind:value={newTaskTitle} on:keypress={onKeyPress} />
        </div>
        <div class="col-md-auto">
            <div class="row no-gutters align-items-center d-flex justify-content-end">
                <!-- <div class="col-md-auto">
                    <span class="task-due">Apr/01/19</span>
                </div> -->
                <div class="col-md-auto task-assignee-avatar">
                    <span>U</span>
                    <!-- <img class="avatar" src="system-images/avatar.jpg" alt="Kate" /> -->
                </div>
                <div class="col-md-auto">
                    <span class="task-assignee">Unassigned</span>
                </div>
            </div>
        </div>
    </div>
</ColorCodedRow>

<style lang="scss">
    @import "../../sass/_variables";

    .task-row {
        padding: 5px 7px 5px $task-color-coded-row-border-size + 2px;
        margin-bottom: .4em;
        margin-top: .4em;
        font-size: 1.1em;
        cursor: pointer;
        /*&:before {
            // TODO refactor this ugly hack when JS variables in styles will be ready
            // https://github.com/sveltejs/svelte/issues/758
            width: $task-color-coded-row-border-size;
        }*/
        /*span.task-key {
            font-size: .9em;
        }*/
        span.task-title, input {
            font-size: 1em;
            color: $main-text-color;
        }
        .task-status {
            font-size: 1.1em;
            color: #757575; // TBM

        }
        /*span.icon-hash {
            color: $light-grey;
            margin: 0 .03em 0 .1em;
            &:before {
                margin: 0;
                font-size: .6em;
                vertical-align: .09em;
            }
        }*/
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
            span {
                display: inline-block;
                width: 20px;
                height: 20px;
                background: $secondary-text-color;
                color: #fff;
                border-radius: 999px;
                line-height: 1.2em;
                text-align: center;
                margin: 0;
                padding: 0;
                margin-right: .2em;
                padding: 0px 0px 0px 1px;
            }
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
