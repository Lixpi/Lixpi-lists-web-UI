<script>
    import ToggleSwitch from './ToggleSwitch.svelte';

	export let segment;
</script>

<style lang="scss">
@import "../../sass/_variables";

nav {
    background: #42494f;
    height: 65px;
    position: fixed;
    z-index: 999;
    width: 100%;
    top: 0;
    &, a {
        color: #fff;
    }
    a {
        text-decoration: none;
        font-weight: 400;
        &.selected {
        }
    }
    .logo {
        height: auto;
        width: 35px;
        filter: invert(100%);
    }
    .create-new-wrapper {
        position: relative;
        padding-right: 2em;
        margin-right: -2em;
        ul {
            display: none;
            position: absolute;
            left: 100%;
            margin-left: -1.5em;
            top: 0;
            background: $red;
            width: auto;
            z-index: 999999;
            box-sizing: border-box;
            padding: 0;
            font-size: .9em;
            border-radius: 3px;
            li {
                white-space: nowrap;
                line-height: 1;
                padding: .5em 1.3em .5em .9em;
                cursor: pointer;
                text-transform: uppercase;
                &:first-of-type {
                    border-top-left-radius: 3px;
                    border-top-right-radius: 3px;
                    &:after {
                        right: 100%;
                        top: .9em;
                        border: solid transparent;
                        content: " ";
                        height: 0;
                        width: 0;
                        position: absolute;
                        pointer-events: none;
                        border-right-color: $red;
                        border-width: 7px;
                        margin-top: -7px;
                    }
                    &:hover {
                        &:after {
                            border-right-color: $pink;
                        }
                    }
                }
                &:last-of-type {
                    border-bottom-left-radius: 3px;
                    border-bottom-right-radius: 3px;
                }
                &:hover {
                    background: $pink;
                }
            }
        }
        &:hover {
            ul {
                display: block;
            }
        }
    }
    .create-new {
        background: $red;
        color: #fff;
        border: none;
        line-height: 1;
        padding: .5em .9em;
        border-radius: 2px;
        font-size: .9em;
        text-transform: uppercase;
        letter-spacing: .02em;
        &:hover {
            cursor: pointer;
            background: darken($red, 7%);
            + ul {
                li {
                    &:first-of-type {
                        background: $pink;
                        &:after {
                            border-right-color: $pink;
                        }
                    }
                }
            }
        }
    }
    .navbar-search-wrapper {
        &::before {
            font-family: 'lixpi-icons';
            color: #fff;
            position: relative;
            left: 1.5em;
            top: 1.02em;
            content: '\e801';
            z-index: 9999;
            height: 0;
            color: $light-grey;
        }
    }
    input.navbar-search {
        background: #5c656d;
        color: #fff;
        padding: .7em .5em .7em 3.5em;
        font-size: 1em;
        width: 100%;
        position: relative;
        margin-top: -1.68em;
        border-radius: 3px;
        &::-webkit-input-placeholder {
          color: $light-grey;
        }
        &::-moz-placeholder {
          color: $light-grey;
        }
        &:-ms-input-placeholder {
          color: $light-grey;
        }
        &:-moz-placeholder {
          color: $light-grey;
        }
    }
    .user-menu {
        img.avatar {
            width: 35px;
            height: auto;
            border-radius: 999px;
        }
    }
}
</style>

<nav class="row align-items-center ">
    <div class="col-auto">
        <img class="logo" src="system-images/logo.png" alt="Lixpi Lists" />
    </div>
    <div class="col-auto">
        <span class="mr-4">Feed</span>
    </div>

    <div class="col-auto">
        <a class="{segment === 'projects' ? 'selected' : ''}" href='projects' rel=prefetch><span>Projscts</span></a>
    </div>

    <div class="col-auto">
        <a class="{segment === 'tasks' ? 'selected' : ''}" href='tasks' rel=prefetch><span>Tasks</span></a>
    </div>

    <div class="col-auto">
        <div class="create-new-wrapper">
            <button class="create-new mr-1">Create</button>
            <ul>
                <li>Task</li>
                <li>List</li>
                <li>Project</li>
            </ul>
        </div>
    </div>

    <div class="col">
        <div class="navbar-search-wrapper">
            <input type="text" class="navbar-search" placeholder="Search"/>
        </div>
    </div>
    <div class="col-auto">
       <ToggleSwitch />
    </div>
    <div class="col col-lg-2 d-flex justify-content-end">
        <div class="user-menu">
            <img class="avatar" src="system-images/avatar.jpg" alt="Kate" />
        </div>
    </div>
    <!-- <div class="col align-self-center d-flex flex-column" >
    asdf
        <img src="images/logo.png" alt="Lixpi Lists" />
    </div> -->
</nav>
