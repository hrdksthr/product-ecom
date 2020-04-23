import { serverLink } from "../utils/environment";

class Service {
    get(url) {
        const headers = {
            'Content-Type': 'application/json; charset=utf-8'
        };
        if(localStorage.getItem('token')) {
            headers.authorization = `Bearer ${localStorage.getItem('token')}`
        }
        return fetch(`${serverLink}/${url}`, {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            headers,
            redirect: 'follow',
            referrer: 'no-referrer',
        })
    }
    post(url = '', data = {}) {
        const headers = {
            'Content-Type': 'application/json; charset=utf-8'
        };
        if(localStorage.getItem('token')) {
            headers.authorization = `Bearer ${localStorage.getItem('token')}`
        }
        return fetch(`${serverLink}/${url}`, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            headers,
            redirect: 'follow',
            referrer: 'no-referrer',
            body: JSON.stringify(data)
        })
    }
}
export default new Service()
