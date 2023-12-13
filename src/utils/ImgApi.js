import {
    imgApiOptions
} from './Constants.js';

class ImgApi {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    }

    _request(endpoint, options) {
        return fetch(`${this._baseUrl}` + endpoint, options).then(this._checkResponse)
    }

    getMovies(request, page) {
        return this._request(`/search/photos?client_id=Ip0XA55zY7b7-d19osq1L5btGg-YCeDZVpnnJjXqHxs&query=${request}&page=${page}`, { headers: this._headers })
    }
}
const imgApi = new ImgApi(imgApiOptions);

export default imgApi;
