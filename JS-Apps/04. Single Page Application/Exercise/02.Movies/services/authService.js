import { jsonRequest } from "../helpers/httpService.js";
import loginPage from "../pages/login.js";
import nav, { setupSection } from "../pages/nav.js";
import viewFinder from "../viewFinder.js";

export function setAuthToken(token) {
    localStorage.setItem('auth_token', token);
}

export function getAuthToken() {
    return localStorage.getItem('auth_token');
}

export function setUserId(userId) {
    localStorage.setItem('userId', userId);
}

export function getUserId() {
    return localStorage.getItem('userId');
}

export function setUsername(username) {
    localStorage.setItem('username', username);
}

export function getUsername() {
    return localStorage.getItem('username');
}

export function isLoggedIn() {
    return localStorage.getItem('auth_token') !== null;
}

export async function logout() {
    let result = await jsonRequest(
        'http://localhost:3030/users/logout', 'GET', undefined, true, true);

    localStorage.clear();
    nav.logoutUserView();
    return loginPage.getView();
}

export async function login(user) {
    try {
        let url = 'http://localhost:3030/users/login';
        let result = await jsonRequest(url, 'POST', user, false);
        setAuthToken(result.accessToken);
        setUserId(result._id);
        setUsername(result.email);
        nav.loginUserView();
        viewFinder.navigateTo('home');
    }
    catch (err) {
        alert(err);
    }
}

export async function register(user) {
    let url = 'http://localhost:3030/users/register';
    let result = await jsonRequest(url, 'Post', user);
    setAuthToken(result.accessToken);
    setUserId(result._id);
    setUsername(result.email);
    nav.loginUserView();
    viewFinder.navigateTo('home');
}

let auth = {
    setUsername,
    setAuthToken,
    setUserId,
    getUserId,
    getAuthToken,
    getUsername,
    login,
    logout,
    register,
    isLoggedIn
}

export default auth;