import auth from "../services/authService.js";

let section = undefined;

export function setupSection(domSection) {
    section = domSection;

    if (auth.isLoggedIn()) {
        this.loginUserView();
    } else {
        this.logoutUserView();
    }
}

export function logoutUserView() {
    let userWelcome = section.querySelector('#user-welcome');
    userWelcome.textContent = `Welcome, guest`;

    let userLinks = [...section.querySelectorAll('.user')];
    userLinks.forEach(el => el.classList.add('hidden'));

    let guestLinks = [...section.querySelectorAll('.guest')];
    guestLinks.forEach(el => el.classList.remove('hidden'));
}

export function loginUserView() {
    let userWelcome = section.querySelector('#user-welcome');
    userWelcome.textContent = `Welcome, ${auth.getUsername()}`;

    let userLinks = [...section.querySelectorAll('.user')];
    userLinks.forEach(el => el.classList.remove('hidden'));

    let guestLinks = [...section.querySelectorAll('.guest')];
    guestLinks.forEach(el => el.classList.add('hidden'));
}

let nav = {
    setupSection,
    loginUserView,
    logoutUserView
}

export default nav;