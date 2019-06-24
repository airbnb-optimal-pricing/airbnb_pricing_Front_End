import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        headers: {
            Authorizarion: token
        },
        baseURL: 'http://localhost:5000/api'
    });
};