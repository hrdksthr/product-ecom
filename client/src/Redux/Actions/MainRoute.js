import service from '../../API/index'
import { POST_MAIN_DATA } from '../Constants/MainRoute'
import { ADD_CART_DATA } from '../Constants/User-Product'

export const mainUserInfo = (data) => {
  return {
    type: POST_MAIN_DATA,
    promise: service.post('userData', data)
  }
}

export const addToCart = (data) => {
  return {
    type: ADD_CART_DATA,
    promise: service.post('addCart', data),
  }
}

export const removeToCart = (data) => {
  return {
    type: ADD_CART_DATA,
    promise: service.post('removeCart', data)
  }
}