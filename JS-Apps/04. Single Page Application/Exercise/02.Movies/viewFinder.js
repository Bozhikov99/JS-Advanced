import addMoviePage from "./pages/addMovie.js";
import editMoveiePage from "./pages/editMovie.js";
import homePage from "./pages/home.js";
import loginPage from "./pages/login.js";
import moviePage from "./pages/moviePage.js";
import registerPage from "./pages/register.js";
import auth from "./services/authService.js";

let navigationCallback = undefined;
let navLinkSelector = undefined;

let views = {
    'home': async () => await homePage.getView(),
    'register': async () => await registerPage.getView(),
    'login': async () => await loginPage.getView(),
    'add-movie': async () => await addMoviePage.getView(),
    'edit-movie': async (id) => await editMoveiePage.getView(id),
    'movie-details': async (id) => await moviePage.getView(id),
    'delete-movie': async (id) => await moviePage.deleteMovie(id),
    'logout': async () => await auth.logout(),
    'like': async (id) => await moviePage.like(id)
};

function initialize(links, linkSelector, callback) {
    links.forEach(l => l.addEventListener('click', changeViewHandler));
    navLinkSelector = linkSelector;
    navigationCallback = callback;
}

export async function changeViewHandler(e) {
    let element = e.target.matches(navLinkSelector) ? e.target : e.target.closest(navLinkSelector);

    let route = element.dataset.route;
    let id = element.dataset.id;

    navigateTo(route, id);
}

export async function navigateTo(route, id) {
    if (views.hasOwnProperty(route)) {
        let viewPromise = views[route](id);
        navigationCallback(viewPromise);
    }
}


let viewFinder = {
    initialize,
    navigateTo,
    changeViewHandler
}

export default viewFinder;