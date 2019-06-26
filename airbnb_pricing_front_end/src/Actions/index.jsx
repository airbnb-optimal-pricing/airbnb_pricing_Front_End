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
            `#`, credentials
        )
        .then( res => {
            //setting these on local so we can grab them easily later
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('userid', res.data.user.id);
            dispatch({type: LOGIN_SUCCESS, payload: res.data});
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
            `#`, newUser
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

