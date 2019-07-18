import tasks from './_tasks.js';

const contents = JSON.stringify(tasks.map(task => {
	return {
		title: task.title,
		taskKey: task.taskKey,
        colorCode: task.colorCode,
        taskType: task.taskType
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}