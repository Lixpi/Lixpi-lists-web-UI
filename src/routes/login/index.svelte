<script context="module">
	// https://stackoverflow.com/questions/57853539/fetch-content-from-wordpress-api-in-sapper
	export async function preload({ params, query }) {
	}
</script>

<script>
 	import * as sapper from '@sapper/app';

	export let data;
	async function handleSubmit(event) {
        // Call an authenication microservice to handle the authentication.
        const response = await fetch("http://localhost:3001/login",
		{
		    method: 'POST',
		    headers: {
		        'Accept': 'application/json',
		        'Content-Type': 'application/json'
		    },
		    body: JSON.stringify({username: event.target.username.value, password: event.target.password.value})
		});
		data = await response.json();
		console.log('data')
		console.log(data)

		if (data) {
			// sapper.goto(`/tasks`);
		}

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
</style>

<svelte:head>
	<title>Blog</title>
</svelte:head>


<div class="container full-height" id="login-page-container">
{JSON.stringify(data)}
<div class="row full-height " id="logo-container">
<div class="col align-self-center d-flex flex-column" >
			<img src="logo-512.png" alt="Lixpi Lists" />
		</div>
	</div>
	<div class="row full-height " id="login-form-container">
	<form class="store-selector  d-flex flex-column" on:submit|preventDefault="{handleSubmit}" >
			<h2>Who are you?</h2>
			<input type="text" name="username" id="username" required placeholder="Username" defaultValue="jira-admin" />
			<input type="password" id="password" required placeholder="Password" defaultValue="asdf" />
			<div class=" d-flex justify-content-end">
			<button class="" type="submit">Go</button>
			</div>
		</form>
	</div>
</div>