import auth from "../services/auth.js";
import viewFinder from "../viewFinder.js";

let view = undefined;

function initialize(domElement) {
    view = domElement
}

async function getView() {
    let form = view.querySelector('form');
    form.addEventListener('submit', logInUser);

    return view;
}

function logInUser(e) {
    e.preventDefault();

    let formData = new FormData(e.target);
    let email = formData.get('email');
    let password = formData.get('password');
    let user = {
        email,
        password
    }

    e.target.reset();

    auth.logIn(user);
}

let loginPage = {
    getView,
    initialize
}

export default loginPage;