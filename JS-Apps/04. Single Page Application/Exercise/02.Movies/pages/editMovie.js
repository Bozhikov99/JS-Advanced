import movieService from "../services/movieService.js";
import viewFinder from "../viewFinder.js";

let section = undefined;

function setupSection(sectionElement) {
    section = sectionElement;
    let form = section.querySelector('form');
    form.addEventListener('submit', editMovie);
}

async function getView(id) {
    try {
        let movie = await movieService.getMovie(id);
        let titleInput = section.querySelector('textarea[name="title"]');
        let descriptionTextarea = section.querySelector('textarea[name="description"]');
        let imageInput = section.querySelector('input[name="imageUrl"]');

        let form = section.querySelector('form');
        form.dataset.id = id;

        titleInput.value = movie.title;
        descriptionTextarea.value = movie.description;
        imageInput.value = movie.img;
        return section;
    } catch (error) {

    }
    return section;
}

async function editMovie(e) {
    e.preventDefault();

    try {
        let form = e.target;
        let formData = new FormData(form);

        let id = form.dataset.id;
        let title = formData.get('title');
        let description = formData.get('description');
        let img = formData.get('imageUrl');

        let editedMovie = {
            title,
            description,
            img
        }

        let updateResult = await movieService.editMovie(editedMovie, id);
        console.log(updateResult);

        form.reset();
        viewFinder.navigateTo('movie-details', id);
    } catch (error) {
        alert(error);
    }
}

let editMoveiePage = {
    setupSection,
    getView
}

export default editMoveiePage;
