// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_tasks.js` rather than `tasks.js`, because
// we don't want to create an `/blog/tasks` route — the leading
// underscore tells Sapper not to do that.

const tasks = [
	{
		taskKey: 'LIX-11',
		project: 'Lixpi Lists',
		colorCode: 'red',
		title: 'What is Sapper?',

		type: 'Bug',
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
		priority: 'Hight',
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
		title: 'How to use Sapper',
		colorCode: 'yellow',
		taskKey: 'LIX-10',
		html: `
			<h2>Step one</h2>
			<p>Create a new project, using <a href='https://github.com/Rich-Harris/degit'>degit</a>:</p>

			<pre><code>npx degit "sveltejs/sapper-template#rollup" my-app
			cd my-app
			npm install # or yarn!
			npm run dev
			</code></pre>

			<h2>Step two</h2>
			<p>Go to <a href='http://localhost:3000'>localhost:3000</a>. Open <code>my-app</code> in your editor. Edit the files in the <code>src/routes</code> directory or add new ones.</p>

			<h2>Step three</h2>
			<p>...</p>

			<h2>Step four</h2>
			<p>Resist overdone joke formats.</p>
		`
	},

	{
		title: 'Why the name?',
		colorCode: 'green',
		taskKey: 'LIX-12',
		html: `
			<p>In war, the soldiers who build bridges, repair roads, clear minefields and conduct demolitions — all under combat conditions — are known as <em>sappers</em>.</p>

			<p>For web developers, the stakes are generally lower than those for combat engineers. But we face our own hostile environment: underpowered devices, poor network connections, and the complexity inherent in front-end engineering. Sapper, which is short for <strong>S</strong>velte <strong>app</strong> mak<strong>er</strong>, is your courageous and dutiful ally.</p>
		`
	},

	{
		title: 'How is Sapper different from Next.js?',
		colorCode: 'yellow',
		taskKey: 'LIX-13',
		html: `
			<p><a href='https://github.com/zeit/next.js'>Next.js</a> is a React framework from <a href='https://zeit.co'>Zeit</a>, and is the inspiration for Sapper. There are a few notable differences, however:</p>

			<ul>
				<li>It's powered by <a href='https://svelte.dev'>Svelte</a> instead of React, so it's faster and your apps are smaller</li>
				<li>Instead of route masking, we encode route parameters in filenames. For example, the page you're looking at right now is <code>src/routes/blog/[slug].html</code></li>
				<li>As well as pages (Svelte components, which render on server or client), you can create <em>server routes</em> in your <code>routes</code> directory. These are just <code>.js</code> files that export functions corresponding to HTTP methods, and receive Express <code>request</code> and <code>response</code> objects as arguments. This makes it very easy to, for example, add a JSON API such as the one <a href='blog/how-is-sapper-different-from-next.json'>powering this very page</a></li>
				<li>Links are just <code>&lt;a&gt;</code> elements, rather than framework-specific <code>&lt;Link&gt;</code> components. That means, for example, that <a href='blog/how-can-i-get-involved'>this link right here</a>, despite being inside a blob of HTML, works with the router as you'd expect.</li>
			</ul>
		`
	},

	{
		title: 'How can I get involved?',
		colorCode: 'grey',
		taskKey: 'LIX-30',
		html: `
			<p>We're so glad you asked! Come on over to the <a href='https://github.com/sveltejs/svelte'>Svelte</a> and <a href='https://github.com/sveltejs/sapper'>Sapper</a> repos, and join us in the <a href='https://svelte.dev/chat'>Discord chatroom</a>. Everyone is welcome, especially you!</p>
		`
	}
];

tasks.forEach(task => {
	task.html = task.html.replace(/^\t{3}/gm, '');
});

export default tasks;
