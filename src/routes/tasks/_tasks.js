// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_tasks.js` rather than `tasks.js`, because
// we don't want to create an `/blog/tasks` route — the leading
// underscore tells Sapper not to do that.

const tasks = [
	{
		taskKey: 'LIX-1',
		project: 'Lixpi Lists',
		colorCode: 'red',
		title: 'What is Sapper?',

		type: 'Bug',
		status: 'Open',
		priority: 'High',
		version: '0.1',
		labels: [
			{
				color: 'pink',
				title: 'UI'
			},
			{
				color: 'orange',
				title: 'UX'
			}
		],
		reporter: 'Kate',
		assignees: [
			{
				name: 'Kate',
				role: 'Front-end'
			},
			{
				name: 'Nargiza',
				role: 'Cheap Backend'
			},
			{
				name: 'Nargiza',
				role: 'Cheap QA'
			}
		],
		timestamps: {
			created: 1563431685,
			modified: 1563431719,
			due: 1563431685
		},
		timeTracking: {
			estimated: '7d',
			spent: '2d 1h'
		},
		html: `
			<p>First, you have to know what <a href='https://svelte.dev'>Svelte</a> is. Svelte is a UI framework with a bold new idea: rather than providing a library that you write code with (like React or Vue, for example), it's a compiler that turns your components into highly optimized vanilla JavaScript. If you haven't already read the <a href='https://svelte.dev/blog/frameworks-without-the-framework'>introductory blog task</a>, you should!</p>

			<p>Sapper is a Next.js-style framework (<a href='blog/how-is-sapper-different-from-next'>more on that here</a>) built around Svelte. It makes it embarrassingly easy to create extremely high performance web apps. Out of the box, you get:</p>

			<ul>
				<li>Code-splitting, dynamic imports and hot module replacement, powered by webpack</li>
				<li>Server-side rendering (SSR) with client-side hydration</li>
				<li>Service worker for offline support, and all the PWA bells and whistles</li>
				<li>The nicest development experience you've ever had, or your money back</li>
			</ul>

			<p>It's implemented as Express middleware. Everything is set up and waiting for you to get started, but you keep complete control over the server, service worker, webpack config and everything else, so it's as flexible as you need it to be.</p>
		`
	},

	{
		taskKey: 'LIX-01',
		project: 'Lixpi Lists',
		colorCode: 'green',
		title: 'Generate global.css from SASS file',

		type: 'Improvement',
		status: 'Open',
		priority: 'Medium',
		version: '0.1',
		labels: [
			{
				color: 'pink',
				title: 'Build scripts'
			},
			{
				color: 'orange',
				title: 'Front-end'
			},
			{
				color: 'pink',
				title: 'Build scripts'
			},
			{
				color: 'pink',
				title: 'Build scripts'
			},
			{
				color: 'green',
				title: 'CSS in JS or vice-versa'
			},
			{
				color: 'orange',
				title: 'Front-end'
			},
			{
				color: 'blue',
				title: 'Front-end'
			},
			{
				color: 'pink',
				title: 'Build scripts'
			},
			{
				color: 'orange',
				title: 'Front-end'
			},
			{
				color: 'pink',
				title: 'Build scripts'
			},
			{
				color: 'blue',
				title: 'Front-end'
			},
			{
				color: 'blue',
				title: 'Front-end'
			},
			{
				color: 'orange',
				title: 'Front-end'
			},
			{
				color: 'orange',
				title: 'Front-end'
			},
			{
				color: 'green',
				title: 'CSS in JS or vice-versa'
			},
			{
				color: 'pink',
				title: 'Build scripts'
			}
		],
		reporter: 'Kate',
		assignees: [
			{
				name: 'Kate',
				role: 'Developer'
			}
		],
		timestamps: {
			created: null,
			modified: null,
			due: null
		},
		timeTracking: {
			estimated: null,
			spent: null
		},
		html: `
			<p>I'm not sure if this is related <a href='https://github.com/sveltejs/sapper/issues/474'>https://github.com/sveltejs/sapper/issues/474</a> but this is for sure mentions the solution <a href='https://github.com/sveltejs/sapper/issues/377'>https://github.com/sveltejs/sapper/issues/377</a>, but I don't know how to make it work...</p>
		`
	},

	{
		taskKey: 'LIX-02',
		project: 'Lixpi Lists',
		colorCode: 'yellow',
		title: 'Properly manage JS variables in CSS',

		type: 'Research',
		status: 'Open',
		priority: 'Medium',
		version: '0.2',
		labels: [
			{
				color: 'green',
				title: 'CSS in JS or vice-versa'
			},
			{
				color: 'blue',
				title: 'Front-end'
			}
		],
		reporter: 'Kate',
		assignees: [
			{
				name: 'Kate',
				role: 'Developer'
			}
		],
		timestamps: {
			created: null,
			modified: null,
			due: null
		},
		timeTracking: {
			estimated: null,
			spent: null
		},
		html: `
			<p>Right now it's very hacky way, watch for this issue <a href='https://github.com/sveltejs/svelte/issues/758'>https://github.com/sveltejs/svelte/issues/758</a></p>
		`
	},

	{
		taskKey: 'LIX-03',
		project: 'Lixpi Lists',
		colorCode: 'grey',
		title: 'Looks like hackpad source code is now open!!! Use it!',

		type: 'Research',
		status: 'Open',
		priority: 'High',
		version: '0.1',
		labels: [
			{
				color: 'pink',
				title: 'Front-end'
			},
			{
				color: 'blue',
				title: 'UI'
			}
		],
		reporter: 'Kate',
		assignees: [
			{
				name: 'Kate',
				role: 'Developer'
			}
		],
		timestamps: {
			created: 'Jul 20 2019',
			modified: 'Jul 20 2019',
			due: 'Aug 01 2019'
		},
		timeTracking: {
			estimated: '1w',
			spent: null
		},
		html: `
			<p>Bingo!!! I can't believe my eyes!!! Dropbox has opened hackpad code? The dreams come true: <a href='https://github.com/dropbox/hackpad'>https://github.com/dropbox/hackpad</a></p>
		`
	},

	{
		taskKey: 'LIX-04',
		project: 'Lixpi Lists',
		colorCode: 'grey',
		title: 'Use slots for routing... when it`ll be ready... :( :( :(',

		type: 'Improvement',
		status: 'Open',
		priority: 'High',
		version: '0.3',
		labels: [
			{
				color: 'pink',
				title: 'Routing'
			}
		],
		reporter: 'Kate',
		assignees: [
			{
				name: 'Kate',
				role: 'Developer'
			}
		],
		timestamps: {
			created: 'Jul 21 2019',
			modified: 'Jul 21 2019',
			due: 'Dec 31 2019'
		},
		timeTracking: {
			estimated: '1w',
			spent: null
		},
		html: `
			<p>Oh boy Sapper is on such an early development state... waiting for this feature impatiently. <a href='https://github.com/sveltejs/sapper/issues/573'>https://github.com/sveltejs/sapper/issues/573</a></p>
		`
	}
];



tasks.forEach(task => {
	task.html = task.html.replace(/^\t{3}/gm, '');
});

export default tasks;
