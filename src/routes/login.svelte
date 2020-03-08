<script context="module">
	// https://stackoverflow.com/questions/57853539/fetch-content-from-wordpress-api-in-sapper
</script>

<script>
 	import * as sapper from '@sapper/app';
 	import { fade, fly } from 'svelte/transition';

	export let data;
	async function handleSubmit(event) {
        // Call an authenication microservice to handle the authentication.
        const response = await fetch("http://localhost:3001/login", {
		    method: 'POST',
		    headers: {
		        'Accept': 'application/json',
		        'Content-Type': 'application/json'
		    },
		    credentials: 'include',
		    body: JSON.stringify({username: event.target.username.value, password: event.target.password.value})
		})

		data = await response.json();
	    if (response.status === 200) {
	     	sapper.goto(`/tasks`);
	    }

	    return { data };
    }
</script>


<style lang="scss">
	.route-enter-active {
	    display: none;
	}
	#login-page-container {
	    position: fixed;
	    top: 0;
	    right: 0;
	    bottom: 0;
	    left: 0;
	    overflow: hidden;

	    // height: 100%;

	    &.route-exit-active {
	        // display: none;
	        #logo-container {
	            background: #fff;
	            img {
	                transform: translateY(-600%);
	            }
	        }
	        #login-form-container {
	            form {
	                transform: translateY(206%);
	            }
	        }
	    }
	    #logo-container {
	        height: 50%;
	        // min-height: 150px;
	        background: #7FA950;
	        -webkit-transition: all 1s cubic-bezier(0.585,-.6,.43,1.65);
	        -moz-transition: all 1s cubic-bezier(0.585,-.6,.43,1.65);
	        -ms-transition: all 1s cubic-bezier(0.585,-.6,.43,1.65);
	        -o-transition: all 1s cubic-bezier(0.585,-.6,.43,1.65);
	        transition: all 1s cubic-bezier(0.585,-.6,.43,1.65);
	        img {
	            margin: auto;
	            -webkit-transition: all .500s cubic-bezier(0.585,-.6,.43,1.65);
	            -moz-transition: all .500s cubic-bezier(0.585,-.6,.43,1.65);
	            -ms-transition: all .500s cubic-bezier(0.585,-.6,.43,1.65);
	            -o-transition: all .500s cubic-bezier(0.585,-.6,.43,1.65);
	            transition: all .500s cubic-bezier(0.585,-.6,.43,1.65);
	        }
	    }
	    #login-form-container {
	        height: 50%;
	        form {
	            -webkit-transition: all .450s cubic-bezier(0.585,-.6,.43,1.65);
	            -moz-transition: all .450s cubic-bezier(0.585,-.6,.43,1.65);
	            -ms-transition: all .450s cubic-bezier(0.585,-.6,.43,1.65);
	            -o-transition: all .450s cubic-bezier(0.585,-.6,.43,1.65);
	            transition: all .450s cubic-bezier(0.585,-.6,.43,1.65);
	            box-sizing: border-box;
	            max-width: 600px;
	            height: 100%;
	            margin: auto;
	            h2 {
	                font-size: 2rem;
	                margin: 2rem 0;
	            }
	            input {
	                margin: .5em 0;
	                font-size: 1em;
	                padding: .3em;
	                border-radius: 2px;
	                border: 1px solid #e1e1e1;
	            }
	            button {
	                text-transform: uppercase;
	                background: #7FA950;
	                color: #fff;
	                border: none;
	                padding: .5em .9em;
	                font-size: .9em;
	                border-radius: 3px;
	                cursor: pointer;
	                margin: 1em 0;
	                &:hover {
	                    background: lighten(#7FA950, 5%);
	                }
	            }
	        }
	    }
	}

	input[type=text], input[type=password] {
		&.has-error {
			border: 1px solid red !important;
		}
	}
</style>


<svelte:head>
	<title>Security first!</title>
</svelte:head>

<div class="full-height" id="login-page-container" in:fade="{{ duration: 700 }}" out:fade="{{ duration: 1250 }}">
	<div class="row full-height " id="logo-container" in:fly="{{ y: -1000, duration: 700 }}" out:fly="{{ y: -1000, duration: 1100 }}">
		<div class="col align-self-center d-flex flex-column">
			<img src="logo-512.png" alt="Lixpi Lists" />
		</div>
	</div>
	<div class="row full-height " id="login-form-container" in:fly="{{ y: 1000, duration: 700 }}" out:fly="{{ y: 1000, duration: 1100 }}">
		<form class="store-selector  d-flex flex-column" on:submit|preventDefault="{handleSubmit}" >
			<h2>Who are you?</h2>
			<input id="username" class="{(data && data.error) && 'has-error'}" type="text" required placeholder="Username" defaultValue="jira-admin" />
			<input id="password" class="{(data && data.error) && 'has-error'}" type="password" required placeholder="Password" defaultValue="asdf" />
			{#if data && data.error}
				<span>{data.error.message}</span>
			{/if}
			<div class=" d-flex justify-content-end">
				<button class="" type="submit">Go</button>
			</div>
		</form>
	</div>
</div>