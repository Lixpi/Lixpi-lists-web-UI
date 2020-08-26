import projects from './_projects.js';

const contents = JSON.stringify(projects.map(project => {
	return {
		title: project.title,
		slug: project.slug,
        colorCode: project.colorCode,
        projectType: project.projectType
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}