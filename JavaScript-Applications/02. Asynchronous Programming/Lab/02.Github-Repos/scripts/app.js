function loadRepos() {
	let baseUrl = 'https://api.github.com/users/';
	let username = document.getElementById('username')
		.value;

	let repoListElement = document.getElementById('repos');

	fetch(`${baseUrl}${username}/repos`)
		.then(res => res.json())
		.then(function (res) {
			for (const r of res) {

				let htmlUrl = r.html_url;
				let fullName = r.full_name;

				let liElement = document.createElement('li');
				let articleElement = document.createElement('a');
				articleElement.setAttribute('href', htmlUrl);
				articleElement.textContent = fullName;

				liElement.appendChild(articleElement);
				repoListElement.appendChild(liElement);
			}
		})
		.catch((message) => {
			let liElement = document.createElement('li');
			liElement.textContent = message;

			repoListElement.appendChild(liElement);
		})
}