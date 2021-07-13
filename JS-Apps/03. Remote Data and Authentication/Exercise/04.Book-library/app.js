let submitButtonElement = document.querySelector('form button');
let loadButtonElement = document.querySelector('#loadBooks')
submitButtonElement.addEventListener('click', submitBook);
loadButtonElement.addEventListener('click', getAllBooks);

function submitBook(e) {
    e.preventDefault();

    let title = document.querySelector('input[name="title"]')
        .value;

    let author = document.querySelector('input[name="author"]')
        .value;

    Array.from(document.querySelectorAll('input'))
        .forEach(i => i.value = '');

    fetch('http://localhost:3030/jsonstore/collections/books', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            author,
            title
        })
    })
}

async function getAllBooks() {
    let booksRequest = await fetch('http://localhost:3030/jsonstore/collections/books');
    let booksObject = await booksRequest.json();

    let tableBodyElement = document.querySelector('tbody');
    Array.from(tableBodyElement.children)
        .forEach(c => c.remove());

    for (const b of Object.entries(booksObject)) {
        createBook(b);
    }
}

function createBook(b){
    let data = b[1]
        let title = data.title;
        let author = data.author;
        let id = b[0];

        let currentTrElement = document.createElement('tr');

        let titleThElement = document.createElement('th');
        titleThElement.textContent = title;

        let authorThElement = document.createElement('th');
        authorThElement.textContent = author;

        let actionThElement = document.createElement('th');

        //buttons
        let deleteButtonElement = document.createElement('button');
        deleteButtonElement.textContent = 'Delete';
        deleteButtonElement.id = id;
        deleteButtonElement.addEventListener('click', deleteBook);

        let editButtonElement = document.createElement('button');
        editButtonElement.textContent = 'Edit';
        editButtonElement.id = id;
        editButtonElement.addEventListener('click', editBook);

        actionThElement.appendChild(editButtonElement);
        actionThElement.appendChild(deleteButtonElement);

        currentTrElement.appendChild(titleThElement);
        currentTrElement.append(authorThElement);
        currentTrElement.appendChild(actionThElement);

        tableBodyElement.append(currentTrElement);
}

function editBook(e) {
    let id = e.target
        .id;

    let formElement = document.querySelector('form');
    formElement.style.display = 'none';

    let editFormElement = document.getElementById('edit');
    editFormElement.style.display = 'block';

    let authorInput = document.querySelector('input[name="edit-author"]');
    let titleInput = document.querySelector('input[name="edit-title"]');

    let currentAuthor = e.target
        .parentElement
        .previousSibling
        .textContent;

    let currentTitle = e.target
        .parentElement
        .parentElement
        .firstChild
        .textContent;

    authorInput.value = currentAuthor;
    titleInput.value = currentTitle;

    let saveButtonElement = document.getElementById('save');
    saveButtonElement.addEventListener('click', (e) => {
        e.preventDefault();

        let newAuthor = authorInput.value;
        let newTitle = titleInput.value;

        authorInput.value = '';
        titleInput.value = '';

        let formElement = document.querySelector('form');
        formElement.style.display = 'block';

        let editFormElement = document.getElementById('edit');
        editFormElement.style.display = 'none';

        fetch(`http://localhost:3030/jsonstore/collections/books/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                author:newAuthor,
                title:newTitle
            })
        })
            .then(res => res.json())
            .then(res => console.log(res));

})


}

function deleteBook(e) {
    let id = e.target
        .id;


    fetch(`http://localhost:3030/jsonstore/collections/books/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });
}