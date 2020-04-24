import {
    POST_LOGIN_FAILURE,
    POST_LOGIN_SUCCESS,
    POST_LOGIN_REQUEST,
} from './../Constants/login'

const initilState = {
    isLoggedIn: false,
    isLoading: false,
    token: null,
    error: null
}

export default function postLogin(
    state = initilState,
    action
) {
    switch (action.type) {
        case POST_LOGIN_REQUEST:
            return { ...state, isLoading: true }
        case POST_LOGIN_SUCCESS:
            return { 
                ...state, 
                token: action.response.data.token,
                isLoggedIn: true, 
                isLoading: false 
            }
        case POST_LOGIN_FAILURE:
            return { ...state, error: action.error, isLoading: false }
        default:
            return state
    }
}

export function logout(state = initilState) {
    return state
}