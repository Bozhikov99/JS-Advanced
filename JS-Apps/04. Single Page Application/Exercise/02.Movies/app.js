//auth page
//home page
//movie
//movie create
//movie edit

import addMoviePage from "./pages/addMovie.js";
import editMoveiePage from "./pages/editMovie.js";
import homePage from "./pages/home.js";
import loginPage from "./pages/login.js";
import moviePage from "./pages/moviePage.js";
import nav from "./pages/nav.js";
import registerPage from "./pages/register.js";
import viewChanger from "./viewChanger.js";
import viewFinder from "./viewFinder.js";

async function setup() {
    let linkClass = 'link';
    let linkSelector = `.${linkClass}`;

    loginPage.setupSection(document.getElementById('form-login'));
    registerPage.setupSection(document.getElementById('form-sign-up'));
    homePage.setupSection(document.getElementById('home-page'), linkClass);
    addMoviePage.setupSection(document.getElementById('add-movie'));
    editMoveiePage.setupSection(document.getElementById('edit-movie'));
    moviePage.setupSection(document.getElementById('movie-details'), linkClass);

    nav.setupSection(document.querySelector('nav'));

    let appElement = document.getElementById('main');

    viewChanger.initialize(appElement, '.view');
    viewFinder.initialize(document.querySelectorAll(linkSelector), linkSelector, viewChanger.changeView);

    viewFinder.navigateTo('home')
}

setup();