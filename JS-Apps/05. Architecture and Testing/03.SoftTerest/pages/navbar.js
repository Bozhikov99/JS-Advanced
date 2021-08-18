import auth from "../services/auth.js";

let view = undefined;

function initialize(domElement) {
    if (auth.isLoggedIn()) {
        loggedInView();
    } else {
        loggedOutView();
    }
    view = domElement
}

function loggedInView() {
    let guestElements = document.querySelectorAll('.guest');
    let userLoggedElements = document.querySelectorAll('.user');

    guestElements.forEach(x => x.style.display = 'none');
    userLoggedElements.forEach(x => x.style.display = 'block')
}

function loggedOutView() {
    let guestElements = document.querySelectorAll('.guest');
    let userLoggedElements = document.querySelectorAll('.user');

    userLoggedElements.forEach(x => x.style.display = 'none')
    guestElements.forEach(x => x.style.display = 'block');
}

let navbar = {
    initialize,
    loggedInView,
    loggedOutView
}

export default navbar;