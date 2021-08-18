import auth from "../services/auth.js";
import viewFinder from "../viewFinder.js";

let view = undefined;

function initialize(domElement) {
    view = domElement
}

async function getView() {
    //if (auth.isLoggedIn()) {
        //init
        view.querySelectorAll('.overflow-hidden')
            .forEach(c => {
                c.style.display = 'none';
            });

        view.querySelectorAll('.idea')
            .forEach(i => i.remove());

        let ideasRequest = await fetch('http://localhost:3030/data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc');
        let res = await ideasRequest.json();
        let noIdeasElement = view.querySelector('h1');
        if (res.length > 0) {
            noIdeasElement.style.display = 'none';
            res.forEach(r => view.appendChild(createHtmlIdea(r)));
        } else {
            noIdeasElement.style.display = 'block';
        }

        return view;
    //} else {
        alert('Sign in to enter the board');
    //}
}

function createHtmlIdea(i) {

    //div class="card overflow-hidden current-card details" style="width: 20rem; height: 18rem;">
    //           <div class="card-body">
    //               <p class="card-text">Best Pilates Workouts to Do at Home</p>
    //           </div>
    //           <img class="card-image" src="./images/best-pilates-youtube-workouts-2__medium_4x3.jpg"
    //               alt="Card image cap">
    //           <a class="btn" href="">Details</a>
    //</div>
    let id = i._id;
    let title = i.title;
    let imageUrl = i.img;

    let ideaDiv = document.createElement('div');
    ideaDiv.classList.add('card', 'current-card', 'details', 'idea');
    ideaDiv.style.width = "20rem";
    ideaDiv.style.height = "18rem";

    let cardBodyDiv = document.createElement('div');
    cardBodyDiv.classList.add('card-body')
    let paragraphElement = document.createElement('p');
    paragraphElement.classList.add('card-text');
    paragraphElement.textContent = title;
    cardBodyDiv.appendChild(paragraphElement);

    let imgElement = document.createElement('img');
    imgElement.classList.add('card-image');
    imgElement.src = imageUrl;
    imgElement.alt = 'Card image cap';

    let anchorElement = document.createElement('a');
    anchorElement.classList.add('btn');
    anchorElement.textContent = 'Details';
    anchorElement.id = id;
    anchorElement.addEventListener('click', showDetails);

    ideaDiv.appendChild(cardBodyDiv);
    ideaDiv.appendChild(imgElement);
    ideaDiv.appendChild(anchorElement);

    return ideaDiv;
}

function showDetails(e) {
    let id = e.target.id;
    viewFinder.goTo('details', id)
}

let dashboard = {
    initialize,
    getView
}

export default dashboard;