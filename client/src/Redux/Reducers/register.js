import {
    POST_REGISTER_FAILURE,
    POST_REGISTER_SUCCESS,
    POST_REGISTER_REQUEST,
} from './../Constants/register';

const initilState = {
    isLoading: false,
    error: null
}

export default function postRegister(
    state = initilState,
    action
) {
    switch (action.type) {
        case POST_REGISTER_REQUEST:
            return { ...state, isLoading: true }
        case POST_REGISTER_SUCCESS:
            return { ...state, isLoading: false }
        case POST_REGISTER_FAILURE:
            return { ...state, error: action.error, isLoading: false }
        default:
            return state
    }
}
