import auth from "../services/auth.js";
import viewFinder from "../viewFinder.js";

let view = undefined;

function initialize(domElement) {
    view = domElement
}

async function getView() {
    let form = view.querySelector('form');
    form.addEventListener('submit', createIdea);

    return view;
}

async function createIdea(e) {
    e.preventDefault();
    let formData = new FormData(e.target);
    let title = formData.get('title');
    let description = formData.get('description');
    let img = formData.get('imageURL')

    e.target.reset();

    if (title.length < 6) {
        alert('Title must be at least 6 characters long');
        throw new Error('Title must be at least 6 characters long');
    }
    if (description.length < 10) {
        alert('description must be at least 10 characters long');
        throw new Error('description must be at least 10 characters long');
    }
    if (img.length < 5) {
        alert('image URL must be at least 5 characters long');
        throw new Error('image URL must be at least 5 characters long');
    }

    let newIdea = {
        title,
        description,
        img
    }

    let createRequest = await fetch('http://localhost:3030/data/ideas',
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'X-Authorization': auth.getAccessToken()
            },
            body: JSON.stringify(newIdea)
        });

    let res = await createRequest.json();

    console.log(res);
    viewFinder.goTo('dashboard');
}

let createPage = {
    initialize,
    getView
}

export default createPage;