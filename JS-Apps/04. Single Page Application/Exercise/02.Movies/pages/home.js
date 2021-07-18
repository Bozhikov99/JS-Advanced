import { ce } from "../helpers/htmlFactory.js";
import auth from "../services/authService.js";
import movieService from "../services/movieService.js";
import viewFinder from "../viewFinder.js";

let section = undefined;
let navLinkClass = undefined;

function setupSection(sectionElement, linkClass) {
    section = sectionElement;
    navLinkClass = linkClass;
}

async function getView() {
    let movies = await movieService.getAllMovies();
    console.log(movies);

    let moviesHtml = movies.map(m => createHtmlMovie(m));

    let movieContainer = section.querySelector('#movie-container');
    movieContainer.querySelectorAll('.movie')
        .forEach(el => el.remove());

    movieContainer.append(...moviesHtml);

    return section;
}

function createHtmlMovie(movie) {
    let movieImg = ce('img', { class: 'card-img-top', src: movie.img, alt: 'Card image cap', width: '400' });
    let cardBodyDiv = ce('div', { class: 'card-body' }, ce('h4', { class: 'card-title' }, movie.title));

    let detailsButton = ce('button', { type: 'button', class: 'btn btn-info' }, 'Details');
    let linkAnchor = ce('a', { class: `${navLinkClass}`, "data-route": `movie-details`, 'data-id': `${movie._id}`, href: `#/details/${movie._id}` });
    if(auth.isLoggedIn()){
        linkAnchor.appendChild(detailsButton);
    }
    linkAnchor.addEventListener('click', viewFinder.changeViewHandler);
    let cardFooterDiv = ce('div', { class: 'card-footer' }, linkAnchor);

    let movieCardDiv = ce('div', { class: 'card mb-4 movie' }, movieImg, cardBodyDiv, cardFooterDiv);
    return movieCardDiv;
}

let homePage = {
    setupSection,
    getView
}

export default homePage;