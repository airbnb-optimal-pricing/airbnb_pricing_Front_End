// import action creators
import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
} from '../Actions/index';

//initial

const initialState = {
    token: {},
    username: {},
    isLoggingIn: false,
    isRegistering: false,
    fetchingUser: false,
    error: ''
}

//reducer

function reducer(state = initialState, action) {
    switch(action.type) {
        case LOGIN_START:
            return {
                ...state,
                isLoggingIn: true,
                error: ''
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggingIn: false,
                user: action.payload.user,
                error: ''
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoggingIn: false,
                error: 'Login Failed'
            }
        case REGISTER_START: 
            return {
                ...state,
                isRegistering: true,
                error: ''
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                isRegistering: false,
                user: action.payload.saved,
                error: ''
            }
        case REGISTER_FAILURE:
            return {
                ...state,
                isRegistering: false,
                error: 'Register failed'
            }
            
        default: 
            return state;
    }
}

export default reducer;