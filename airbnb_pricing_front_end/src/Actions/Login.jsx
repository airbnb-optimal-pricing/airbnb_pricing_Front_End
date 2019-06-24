import axios from 'axios';
import { axiosWithAuth } from '../utilities/axiosWithAuth';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = credentials => dispatch => {
    dispatch({ type: LOGIN_START });
    return axiosWithAuth()
    .post('/login', credentials)
    .then(response => {
        console.log('login res...', response);
        localStorage.setItem('token', response.data.payload);
        dispatch({ type: LOGIN_SUCCESS });
        return true;
    })
    .catch(error => {
        dispatch({ type: LOGIN_FAILURE, payload: error });
    });
};