import axios from 'axios';



// Login Types

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

// Login func

export const LogIn = credentials => dispatch => {
    dispatch({type: LOGIN_START});
    return axios
        .post(
            `https://airbnboptimalprice-backend.herokuapp.com/auth/login`, credentials
        )
        .then( response => {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('username', response.data.user.id);
            dispatch({type: LOGIN_SUCCESS, payload: response.data});
        })
        .catch(error => {
            console.log(error);
            dispatch({type: LOGIN_FAILURE})
        })
};

//Register Types

export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

//register func

export const Register = newUser => dispatch => {
    dispatch({type: REGISTER_START});
    return axios 
        .post(
            `https://airbnboptimalprice-backend.herokuapp.com/auth/register`, newUser
        )
        .then(res => {
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('userid', res.data.saved.id);
            dispatch({type: REGISTER_SUCCESS, payload: res.data});
        })
        .catch(error => {
            console.log(error);
            dispatch({type: REGISTER_FAILURE})
        })
};

//simple form submission types

export const SIMPLE_FORM_START = 'SIMPLE_FORM_START';
export const SIMPLE_FORM_SUCCESS = 'SIMPLE_FORM_SUCCESS';
export const SIMPLE_FORM_FAILURE = 'SIMPLE_FORM_FAILURE';

//simple form function

export const simpleFormSubmit = newSimpleSubmit => dispatch => {
    dispatch({type: SIMPLE_FORM_START});
    return axios
        .post(
            'https://airbnboptimalprice-backend.herokuapp.com/simple/simpleprediction', newSimpleSubmit
        )
        .then(res => {
            dispatch({type: SIMPLE_FORM_SUCCESS, payload: res.data})
        })
        .catch(error => {
            dispatch({type: SIMPLE_FORM_FAILURE})
        })
};

//full form submission types

export const FULL_FORM_START = 'FULL_FORM_START';
export const FULL_FORM_SUCCESS = 'FULL_FORM_SUCCESS';
export const FULL_FORM_FAILURE = 'FULL_FORM_FAILURE';

// full form function

export const FullFormSubmit = newFullSubmit => dispatch => {
    dispatch({type: FULL_FORM_START});
    return axios
        .post(
            '#', newFullSubmit
        )
        .then(res => {
            dispatch({type: FULL_FORM_SUCCESS, payload: res.data})
        })
        .catch(error => {
            dispatch({type: FULL_FORM_FAILURE})
        })
};