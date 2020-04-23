import {
    GET_PRODUCTS_FAILURE,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_REQUEST,
} from '../Constants/Products';

const initilState = {
    isLoading: false,
    products: [],
    error: null
}

export default function getProductList(
    state = initilState,
    action
) {
    switch (action.type) {
        case GET_PRODUCTS_REQUEST:
            return { ...state, isLoading: true }
        case GET_PRODUCTS_SUCCESS:
            return { ...state,
                products: action.response.data,
                isLoading: false 
            }
        case GET_PRODUCTS_FAILURE:
            return { ...state, error: action.error, isLoading: false }
        default:
            return state
    }
}
