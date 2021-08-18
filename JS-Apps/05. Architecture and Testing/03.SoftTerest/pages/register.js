import auth from "../services/auth.js";
import viewController from "../viewController.js";
import viewFinder from "../viewFinder.js";

let view = undefined;

function initialize(domElement) {
    view = domElement;
}

async function getView() {
    let form = view.querySelector('form');
    form.addEventListener('submit', registerUser);
    return view;
}

async function registerUser(e) {
    e.preventDefault();

    let formData = new FormData(e.target);
    let email = formData.get('email');
    let password = formData.get('password');
    let rePass = formData.get('repeatPassword');
    let user = {
        email,
        password
    }
    e.target.reset();

    if (email.length < 3) {
        alert('The email should be at least 3 characters long');
        return;
    } else if (!email.match(/^(?=.{3,})(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[@#$%^&+=]).*$/g)) {
        alert('The email should include at least one digit and special symbol');
        return;
    }

    if (password.length < 3) {
        alert('The password should be at least 3 characters long');
        return;
    }
    if (password != rePass) {
        alert("Passwords don't match");
        return;
    }
    auth.register(user);
}

let registerPage = {
    initialize,
    getView
}

export default registerPage;