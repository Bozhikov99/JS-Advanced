function loadCommits() {
    let username = document.getElementById('username').value;
    let repository = document.getElementById('repo').value;
    let commitsElement = document.getElementById('commits');

    let url = `https://api.github.com/repos/${username}/${repository}/commits`;

    fetch(url)
        .then(res => res.json())
        .then(function (res) {
            Object.entries(res).forEach(c => {
                let liElement = document.createElement('li');
                liElement.textContent = `${c[1].commit.author.name}: ${c[1].commit.message}`;
                commitsElement.appendChild(liElement);
            })
        })
        .catch(function (err) {
            let status = err.status;
            let liElement = document.createElement('li');
            liElement.textContent = `Error: ${status} (Not Found)`;
            commitsElement.appendChild(liElement);
        });
}