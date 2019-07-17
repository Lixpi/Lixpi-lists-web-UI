<script>
    import ColorCodedRow from './ColorCodedRow.svelte';
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


<ColorCodedRow colorCode={'grey'}>
    <div class="row no-gutters align-items-center task-row new-task-input">
        <div class="col-md-auto">
            <span class="icon-hash"></span>
        </div>
        <div class="col">
            <!-- <span class="task-title">Regular priority task</span> -->
            <input type="text" name="new-task" placeholder="New task" />
        </div>
        <div class="col-md-auto">
            <div class="row no-gutters align-items-center d-flex justify-content-end">
                <div class="col-md-auto">
                    <span class="task-due">Apr/01/19</span>
                </div>
                <div class="col-md-auto task-assignee-avatar">
                    <img class="avatar" src="system-images/avatar.jpg" alt="Kate" />
                </div>
                <div class="col-md-auto">
                    <span class="task-assignee">Kate Wilson</span>
                </div>
            </div>
        </div>
    </div>
</ColorCodedRow>
