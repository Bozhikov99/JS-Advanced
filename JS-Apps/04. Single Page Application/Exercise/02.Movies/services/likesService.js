import { jsonRequest } from "../helpers/httpService.js";
import auth from "./authService.js";

let baseUrl = 'http://localhost:3030';

async function getUserLikes(id) {
    let userId = auth.getUserId();
    let userLikes = await jsonRequest(`${baseUrl}/data/likes?where=movieId%3D%22${id}%22%20and%20_ownerId%3D%22${userId}%22`);
    return userLikes;
}

async function getMovieLikes(id) {
    let movieLikes = await jsonRequest(`${baseUrl}/data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count`);
    return movieLikes;
}

async function likeMovie(body) {
    let result = await jsonRequest(`${baseUrl}/data/likes`, 'POST', body, true);
    console.log(result);
}

let likesService = {
    getUserLikes,
    getMovieLikes,
    likeMovie
}

export default likesService;