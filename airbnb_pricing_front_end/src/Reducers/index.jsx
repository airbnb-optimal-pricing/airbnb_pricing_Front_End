// import action creators
import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    SIMPLE_FORM_START,
    SIMPLE_FORM_SUCCESS,
    SIMPLE_FORM_FAILURE,
    FULL_FORM_START,
    FULL_FORM_SUCCESS,
    FULL_FORM_FAILURE,
} from '../Actions/index';

//initial

const initialState = {
    token: {},
    username: {},
    isLoggingIn: false,
    isRegistering: false,
    fetchingUser: false,
    error: '',
    prediction: null,
    plot_values:  [],
    bins: []
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
        case SIMPLE_FORM_START:
                return{
                    ...state,
                    isSubmitting: true,
                }
        case SIMPLE_FORM_SUCCESS:
            return{
                ...state,
                isSubmitting: false,
                prediction: action.payload.prediction,
            }
        case SIMPLE_FORM_FAILURE:
            return{
                ...state,
                isSubmitting: false,
            }       
            
        case FULL_FORM_START:
            return{
                ...state,
                isSubmitting: true,
            }
        case FULL_FORM_SUCCESS:
            return{
                ...state,
                isSubmitting: false,
                prediction: action.payload.prediction,
                bins: action.payload.bins,
                plot_values: action.payload.plot_values
                }
        case FULL_FORM_FAILURE:
            return{
                ...state,
                isSubmitting: false,
            } 
            
            
        default: 
            return state;
    }
}

export default reducer;