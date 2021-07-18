import { ce } from "../helpers/htmlFactory.js";
import auth from "../services/authService.js";
import likesService from "../services/likesService.js";
import movieService from "../services/movieService.js";
import viewFinder from "../viewFinder.js";

let section = undefined;
let navLinkClass = undefined;

function setupSection(sectionElement, linkClass) {
    section = sectionElement;
    navLinkClass = linkClass;
}

async function getView(id) {
    let movieDetail = await movieService.getMovie(id);
    console.log(movieDetail);

    let movieContainer = section.querySelector('#movie-details-container');
    [...movieContainer.children].forEach(c => c.remove());

    let userLikes = await likesService.getUserLikes(id);
    let movieLikes = await likesService.getMovieLikes(id);
    console.log(movieLikes);

    let movieDetails = createMovieDetails(movieDetail, userLikes.length > 0, movieLikes);
    movieContainer.appendChild(movieDetails);

    return section;
}


function createMovieDetails(movie, hasLiked, likes) {
    let movieHeading = ce('h1', undefined, `Movie title: ${movie.title}`);

    let movieImage = ce('img', { class: 'img-thumbnail', src: movie.img, alt: 'Movie' });
    let imageDiv = ce('div', { class: 'col-md-8' }, movieImage);

    let descriptionHeading = ce('h3', { class: 'my-3' }, 'Movie Description');
    let descriptionP = ce('p', undefined, movie.description);

    let deleteBtn = ce('a', { class: `btn btn-danger ${navLinkClass}`, 'data-route': 'delete', 'data-id': `${movie._id}`, href: `#/delete/${movie._id}` }, 'Delete');
    deleteBtn.addEventListener('click', viewFinder.changeViewHandler);
    let editBtn = ce('a', { class: `btn btn-warning ${navLinkClass}`, 'data-route': 'edit-movie', 'data-id': `${movie._id}`, href: `#/edit/${movie._id}` }, 'Edit');
    editBtn.addEventListener('click', viewFinder.changeViewHandler);
    let likeBtn = ce('a', { class: `btn btn-primary ${navLinkClass}`, 'data-route': 'like', 'data-id': `${movie._id}`, href: `#/like/${movie._id}` }, 'Like');
    likeBtn.addEventListener('click', viewFinder.changeViewHandler);
    let likesSpan = ce('span', { class: 'enrolled-span likes' }, `Liked: ${likes}`);
    let descriptionDiv = ce('div', { class: 'col-md-4 text-center' },
        descriptionHeading, descriptionP);

    let isOwner = auth.getUserId() === movie._ownerId;
    if (isOwner) {
        descriptionDiv.appendChild(deleteBtn);
        descriptionDiv.appendChild(editBtn);
    }

    if (!hasLiked && !isOwner) {
        descriptionDiv.appendChild(likeBtn);
    }

    descriptionDiv.appendChild(likesSpan);

    let movieDiv = ce('div', { class: 'row bg-light text-dark movie-details', 'data-id': `${movie._id}` },
        movieHeading, imageDiv, descriptionDiv);

    return movieDiv;
}

async function like(movieId) {
    let body = { movieId };
    await likesService.likeMovie(body);
    return moviePage.getView(movieId);
}

async function deleteMovie(movieId) {
    try {
        let deleteResult = await movieService.deleteMovie(movieId);
        return homePage.getView();
    } catch (err) {
        console.error(err);
        alert(err);
    }
}

let moviePage = {
    setupSection,
    getView,
    like,
    deleteMovie
}

export default moviePage;