const projectsGrid = document.getElementById('projectsGrid');

function addProject(name, description, icon = '📦', url = null) {
	// Auto-generate URL from name if not provided
	const projectUrl = url || `${name.replace(/\s+/g, '')}/`;

	const card = document.createElement('a');
	card.href = projectUrl;
	card.className = 'project-card';
	card.innerHTML = `
		<div class="card-icon">${icon}</div>
		<h2>${name}</h2>
		<p>${description}</p>
	`;
	projectsGrid.appendChild(card);
}

function addPlaceholder(name = 'New Project', description = 'Next project goes here', icon = '➕') {
	name = name || 'New Project';
	description = description || 'Next project goes here';
	icon = icon || '➕';
	const placeholder = document.createElement('div');
	placeholder.className = 'project-card placeholder';
	placeholder.innerHTML = `
		<div class="card-icon">${icon}</div>
		<h2>${name}</h2>
		<p>${description}</p>
	`;
	projectsGrid.appendChild(placeholder);
}

// Projects
addProject('Console App',
	'Browser-based JavaScript console with command history and live preview',
	'🖥️', 'ConsoleApp/'
);

// Placeholder
addPlaceholder('', 'This is a placeholder for upcoming project', '');
