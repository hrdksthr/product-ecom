import {
    POST_MAIN_DATA_FAILURE,
    POST_MAIN_DATA_SUCCESS,
    POST_MAIN_DATA_REQUEST,
} from '../Constants/MainRoute';

import {
    ADD_CART_DATA_FAILURE,
    ADD_CART_DATA_SUCCESS,
    ADD_CART_DATA_REQUEST,
} from '../Constants/User-Product';

const initilState = {
    isFetching: false,
    user: {},
    userProducts: [],
    userProductsCount: 0,
    userProductBaseCount: {

    },
    totalPrice: 0
}

export default function mainUserInfo(
    state = initilState,
    action
) {
    switch (action.type) {
        case POST_MAIN_DATA_REQUEST:
            return { ...state, isFetching: true }
        case POST_MAIN_DATA_SUCCESS:
            const obj = {};
            let price = 0;
            let count = 0;
            action.response.userProducts.map(item => {
                obj[item.id] = item.count;
                if(item.price && typeof item.price === "number" && item.price !== "NaN") {
                    price = Number(Number(Number(price).toFixed(2)) + Number(Number(item.price).toFixed(2))) * item.count
                }
                count = Number(count) + Number(item.count)
                return item
            })
            return {
                ...state,
                user: action.response.user,
                userProducts: action.response.userProducts,
                userProductsCount: count,
                isFetching: false,
                userProductBaseCount: obj,
                totalPrice: price
            }
        case POST_MAIN_DATA_FAILURE:
            return { ...state, error: action.error, isFetching: false }
        default:
            return state
    }
}
export function addToCard(
    state = {},
    action,
) {
    switch (action.type) {
        case ADD_CART_DATA_REQUEST:
            return { ...state, isFetching: true }
        case ADD_CART_DATA_SUCCESS:
            console.log("state", state)
            return {
                ...state,
                isFetching: false
            }
        case ADD_CART_DATA_FAILURE:
            return { ...state, error: action.error, isFetching: false }
        default:
            return state
    }
}