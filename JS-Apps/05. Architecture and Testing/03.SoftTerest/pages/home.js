import auth from "../services/auth.js";

let view = undefined;

function initialize(domElement) {
    view = domElement
}

async function getView() {
    return view;
}

let homePage = {
    initialize,
    getView
}

export default homePage;