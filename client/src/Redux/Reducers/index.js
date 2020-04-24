import { combineReducers } from 'redux'
import login, { logout } from './login'
import register from './register'
import mainUserData, {addToCard} from './MainRoute'
import products from './Products'

const rootReducer = combineReducers({ 
    login,
    logout,
    register,
    mainUserData,
    products,
    addToCard,
})

export default rootReducer
