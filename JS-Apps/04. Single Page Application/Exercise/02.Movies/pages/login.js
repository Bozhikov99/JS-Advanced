import { jsonRequest } from "../helpers/httpService.js";
import auth from "../services/authService.js";
import viewFinder, { navigateTo } from "../viewFinder.js";

let section = undefined;

function setupSection(sectionElement) {
    section = sectionElement;
    let form = section.querySelector('#login-form');
    form.addEventListener('submit', login);
}

async function login(e) {
    e.preventDefault();
    let form = e.target;
    let formData = new FormData(form);
    let user = {
        email: formData.get('email'),
        password: formData.get('password')
    }

    form.reset();
    await auth.login(user);
}

async function getView() {
    return section;
}

let loginPage = {
    setupSection,
    getView
}

export default loginPage;