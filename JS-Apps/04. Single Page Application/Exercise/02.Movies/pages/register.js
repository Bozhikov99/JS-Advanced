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
    let repeatPassword = formData.get('repeatPassword');
    let email = formData.get('email');

    let user = {
        email,
        password
    }


    if (email == '') {
        alert('Email cannot be empty');
        throw new Error('Email cannot be empty');
    }
    if (password.length < 6) {
        alert('Password must be at least 6 characters long');
        throw new Error('Password must be at least 6 characters long');
    } else if (password != repeatPassword) {
        alert('Passwords do not match');
        throw new Error('Passwords do not match');
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