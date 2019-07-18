import tasks from './_tasks.js';

const lookup = new Map();
tasks.forEach(task => {
	lookup.set(task.taskKey, JSON.stringify(task));
});

export function get(req, res, next) {
	// the `taskKey` parameter is available because
	// this file is called [taskKey].json.js
	const { taskKey } = req.params;

	if (lookup.has(taskKey)) {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});

		res.end(lookup.get(taskKey));
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({
			message: `Not found`
		}));
	}
}
