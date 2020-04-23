import service from '../../API/index'
import { GET_PRODUCTS } from '../Constants/Products'

export const productList = (data) => {
  return {
    type: GET_PRODUCTS,
    promise: service.get('list', data)
  }
}
