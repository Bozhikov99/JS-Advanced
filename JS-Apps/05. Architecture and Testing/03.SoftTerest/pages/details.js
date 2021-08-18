import auth from "../services/auth.js";
import viewFinder from "../viewFinder.js";

let view = undefined;

function initialize(domElement) {
    view = domElement
}

async function getView(id) {
    let ideaRequest = await fetch(`http://localhost:3030/data/ideas/${id}`);
    let idea = await ideaRequest.json();
    let img = idea.img;
    let title = idea.title;
    let description = idea.description;
    let ideaOwnerId = idea._ownerId;

    let imageElement = view.querySelector('.det-img');
    let titleElement = view.querySelector('.display-5');
    let descriptionElement = view.querySelector('.idea-description');
    imageElement.src = img;
    titleElement.textContent = title;
    descriptionElement.textContent = description;

    let deleteButton = view.querySelector('a');
    let userId = auth.getUserId();

    if (ideaOwnerId != userId) {
        deleteButton.setAttribute('hidden', true);
    } else {
        deleteButton.removeAttribute('hidden');
        deleteButton.addEventListener('click', async (e) => {
            e.preventDefault();
            let deleteRequest = await fetch(`http://localhost:3030/data/ideas/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Authorization': auth.getAccessToken()
                }
            })

            let res = await deleteRequest.json();
            console.log(res);
            viewFinder.goTo('dashboard');
        })
    }
    return view;
}

let detailsPage = {
    initialize,
    getView
}

export default detailsPage;