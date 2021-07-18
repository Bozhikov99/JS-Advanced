import { jsonRequest } from "../helpers/httpService.js";
import auth from "../services/authService.js";
import viewFinder from "../viewFinder.js";

let section = undefined;

function setupSection(sectionElement) {
    section = sectionElement;
    let form = section.querySelector('#register-form');
    form.addEventListener('submit', register);
}

async function getView() {
    return section;
}

async function register(e) {
    e.preventDefault();
    let formData = new FormData(e.target);
    let password = formData.get('password');
    let repeatPassowrd = formData.get('repeatPassword');
    let email = formData.get('email');

    let user = {
        email,
        password
    }


    if (email == '' ||
        password != repeatPassowrd ||
        password.length < 6) {
        alert('Invalid data!');
    }

    let url = 'http://localhost:3030/users/register';
    let result = await jsonRequest(url, 'POST', user);

    auth.setAuthToken(result.accessToken);
    viewFinder.navigateTo('home');
}

let registerPage = {
    setupSection,
    getView
}

export default registerPage;