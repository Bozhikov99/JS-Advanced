import navbar from "../pages/navbar.js";
import viewFinder from "../viewFinder.js";

async function setAcessToken(token) {
    localStorage.setItem('auth_token', token);
}

function getAccessToken() {
    return localStorage.getItem('auth_token');
}

function setEmail(email) {
    localStorage.setItem('email', email);
}

function setUserId(id) {
    localStorage.setItem('userId', id);
}

function getEmail() {
    return localStorage.getItem('email');
}

function getUserId() {
    return localStorage.getItem('userId');
}

async function logOut() {
    localStorage.clear();
    let logOutRequest = await fetch('http://localhost:3030/users/logout');
    let res = await logOutRequest.json();
    console.log(res);
    navbar.initialize();
    viewFinder.goTo('home');
}

function isLoggedIn() {
    return getAccessToken() != undefined;
}

async function logIn(user) {
    try {
        let registerRequest = await fetch('http://localhost:3030/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        let res = await registerRequest;

        if (!res.ok) {
            let message = await res.text();
            throw new Error(`${res.status}: ${res.statusText}\n${message}`);
        }

        res = await registerRequest.json();
        setAcessToken(res.accessToken);
        setUserId(res._id);
        setEmail(res.email);

        navbar.initialize();
        viewFinder.goTo('home');
    } catch (error) {
        alert(error);
    }
}

async function register(user) {
    try {
        let registerRequest = await fetch('http://localhost:3030/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        let res = await registerRequest;

        if (!res.ok) {
            let message = await res.text();
            throw new Error(`${res.status}: ${res.statusText}\n${message}`);
        }

        res = await registerRequest.json();
        setAcessToken(res.accessToken);
        setUserId(res._id);
        setEmail(res.email);

        navbar.initialize();
        viewFinder.goTo('home');
    } catch (error) {
        alert(error);
    }

}

let auth = {
    register,
    logIn,
    logOut,
    isLoggedIn,
    setAcessToken,
    getAccessToken,
    setUserId,
    getUserId,
    setEmail,
    getEmail
}

export default auth;