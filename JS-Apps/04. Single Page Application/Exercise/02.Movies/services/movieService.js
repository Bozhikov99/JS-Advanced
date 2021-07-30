import { jsonRequest } from "../helpers/httpService.js";

let baseUrl = 'http://localhost:3030';

async function createMovie(newMovie) {
    let createResult = await jsonRequest(`${baseUrl}/data/movies`, 'POST', newMovie, true);
    return createResult;
}

async function editMovie(editedMovie, id) {
    let editResult = await jsonRequest(`${baseUrl}/data/movies/${id}`, 'PUT', editedMovie, true);
    return editResult;
}

async function getMovie(id) {
    let movie = await jsonRequest(`${baseUrl}/data/movies/${id}`);
    return movie;
}

async function getAllMovies() {
    let movies = await jsonRequest(`${baseUrl}/data/movies`);
    return movies;
}

async function deleteMovie(id) {
    let deleteResult = await jsonRequest(`${baseUrl}/data/movies/${id}`, 'DELETE', undefined, true);
    return deleteResult;
}

let movieService = {
    createMovie,
    editMovie,
    getMovie,
    getAllMovies,
    deleteMovie
}

export default movieService;