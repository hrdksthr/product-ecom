import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../Reducers/index'
import promiseMiddleware from './../Middleware'

let Middlewares = [thunk, promiseMiddleware]

export default function store() {
    return createStore(
        rootReducer,
        compose(
            applyMiddleware(...Middlewares),
            window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
        )
    );
}
