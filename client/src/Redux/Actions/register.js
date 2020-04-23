import service from './../../API/index'
import { POST_REGISTER } from './../Constants/register'

export const register = (data) => {
  return {
    type: POST_REGISTER,
    promise: service.post('register', data)
  }
}
