import service from './../../API/index'
import { POST_LOGIN } from './../Constants/login'

export const postLogin = (data) => {
  return {
    type: POST_LOGIN,
    promise: service.post('login', data)
  }
}
