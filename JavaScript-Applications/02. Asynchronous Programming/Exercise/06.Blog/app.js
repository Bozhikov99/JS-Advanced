function attachEvents() {

    let loadButtonElement = document.getElementById('btnLoadPosts');
    let viewButtonElement = document.getElementById('btnViewPost');
    loadButtonElement.addEventListener('click', getOptions);
    viewButtonElement.addEventListener('click', getPost);

    let posts = {};

    async function getOptions() {
        let url = 'http://localhost:3030/jsonstore/blog/posts';
        let postsRequest = await fetch(url);
        let postsObject = await postsRequest.json();
        let selectElement = document.getElementById('posts');

        for (const p of Object.values(postsObject)) {
            selectElement.appendChild(createOption(p));
        }
    }

    function createOption(post) {
        let title = post.title;
        let id = post.id;
        let body = post.body;

        posts[id] = {
            title,
            body
        };
        let optionElement = document.createElement('option');
        optionElement.value = id;
        optionElement.textContent = title;

        return optionElement;
    }

    async function getPost() {

        let selectElement = document.getElementById('posts');
        let currentPostKey = selectElement.value;

        let url = `http://localhost:3030/jsonstore/blog/comments`;
        let commentsRequest = await fetch(url);
        let commentsObject = await commentsRequest.json();

        let comments = Array.from(Object.values(commentsObject))
            .filter(c => c.postId == currentPostKey);

        let titleH1Element = document.getElementById('post-title');
        titleH1Element.textContent = posts[currentPostKey].title.toUpperCase();

        document.getElementById('post-body')
            .textContent = posts[currentPostKey].body;

        let commentBoxElement = document.getElementById('post-comments');

        comments.forEach(c => {
            let text = c.text;
            let id = c.id;

            let liElement = document.createElement('li');
            liElement.id = id;
            liElement.textContent = text;

            commentBoxElement.appendChild(liElement);
        });
    }
}

attachEvents();