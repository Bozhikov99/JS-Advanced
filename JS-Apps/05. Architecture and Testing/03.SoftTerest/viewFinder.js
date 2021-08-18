import createPage from "./pages/create.js";
import dashboard from "./pages/dashboard.js";
import detailsPage from "./pages/details.js";
import homePage from "./pages/home.js";
import loginPage from "./pages/login.js";
import registerPage from "./pages/register.js";
import auth from "./services/auth.js";
import viewController from "./viewController.js";

let navLinkSelector = undefined;

let views = {
    'create': async () => await createPage.getView(),
    'home': async () => await homePage.getView(),
    'register': async () => await registerPage.getView(),
    'login': async () => await loginPage.getView(),
    'dashboard': async () => await dashboard.getView(),
    'details': async (id) => await detailsPage.getView(id),
    'logout': async () => await auth.logOut()
}

function initialize(links, linkSelector) {
    navLinkSelector = linkSelector;
    links.forEach(l => l.addEventListener('click', changeViewHandler));
}

function changeViewHandler(e) {
    let link = e.target.matches(navLinkSelector) ? e.target : e.target.closest(navLinkSelector);
    let route = link.dataset.route;
    let id = link.id;

    goTo(route, id);
}

async function goTo(route, id) {
    if (views.hasOwnProperty(route)) {
        let currentView = views[route](id);
        viewController.changeView(currentView);
    }
}

let viewFinder = {
    initialize,
    goTo
}

export default viewFinder;