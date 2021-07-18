import movieService from "../services/movieService.js";
import viewFinder from "../viewFinder.js";

let section = undefined;

export function setupSection(sectionElement) {
    section = sectionElement;
    let form = section.querySelector('form');
    form.addEventListener('submit', addMovie);
}

export async function addMovie(e) {
    e.preventDefault();
    try {
        let form = e.target;
        let formData = new FormData(form);
        let title = formData.get('title')
        let description = formData.get('description');
        let img = formData.get('imageUrl');

        let newMovie = {
            title,
            description,
            img
        }

        let createResult = await movieService.createMovie(newMovie);
        console.log(createResult);
        form.reset();
        viewFinder.navigateTo('home');

    } catch (error) {
        console.error(error);
        alert(error);
    }
}

export async function getView() {
    return section;
}

let addMoviePage = {
    setupSection,
    getView
}

export default addMoviePage;