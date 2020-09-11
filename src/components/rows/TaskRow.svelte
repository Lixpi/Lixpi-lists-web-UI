<script context="module">
    import { Navigate } from 'svelte-router-spa'
    import moment from 'moment'
    import ColorCodedRow from './ColorCodedRow.svelte'
    import config from '../../config.js'
</script>

<script>
    const { dateFormat } = config
    export let colorCode
    export let title
    export let taskKey
    export let dueAt
    export let assignees
</script>

<ColorCodedRow colorCode={colorCode} classNames="task-row-wrapper">
    <div class="row no-gutters align-items-center task-row">
        <div class="col-sm-auto task-status">
            <span class="icon-ok-circle"></span>
        </div>
        <div class="col-sm-auto">
            <span class="icon-hash"></span>
        </div>
        <div class="col-auto">
            <Navigate to="task/{taskKey}" styles="task-key"><span>{taskKey}</span></Navigate>
            <!-- <a rel='prefetch' href='task/{taskKey}' class="task-key"><span>{taskKey}</span></a> -->
        </div>
        <div class="col-sm-auto">
            <span class="vertical-divider"></span>
        </div>
        <div class="col-sm-auto">
            <span class="task-title">{title}</span>
        </div>
        <div class="col">
            <div class="row no-gutters align-items-center d-flex justify-content-end">
                <div class="col-sm-auto datepicker-container">
                {#if dueAt}
                  <span class="task-due">{moment(dueAt).format(dateFormat)}</span>
                {/if}
                     <!-- <Calendar
                        date={new Date()}
                        onChange={this.handleSelect}
                    /> -->
                </div>
                {#if assignees && assignees.length}
                  {#each assignees as assignee}
                      <div class="col-sm-auto task-assignee-avatar">
                          <img class="avatar" src="/system-images/avatar.jpg" alt="Kate" />
                      </div>
                      <div class="col-sm-auto">
                          <!-- <TaskAssignee isEditing={this.props.isEditing} selectedOption={selectedOption} handleChange={this.handleChange} /> -->
                          <span class="task-assignee">{assignee.username}</span>
                      </div>
              	{/each}
              {/if}
            </div>
        </div>
    </div>
</ColorCodedRow>


<style lang="scss">
    @import "../../sass/_variables";

    .task-row {
        padding: 5px 7px 5px $task-color-coded-row-border-size + 2px;
        margin-bottom: .1em;
        font-size: 1.1em;
        cursor: pointer;
        /*&:before {
            // TODO refactor this ugly hack when JS variables in styles will be ready
            // https://github.com/sveltejs/svelte/issues/758
            width: $task-color-coded-row-border-size;
        }*/
        :global(a) {
            text-decoration: none;
            color: $secondary-text-color;
        }
        :global(a.task-key) {
            font-size: .9em;
        }
        span.task-title, input {
            font-size: 1em;
            /*color: #5d5d5d;*/
            color: $main-text-color;
        }
        .task-status {
            font-size: 1.1em;
            color: $secondary-text-color;
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
            margin: 0 .03em 0 .1em;
            &:before {
                margin: 0;
                font-size: .6em;
                vertical-align: .09em;
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
