import { get, put } from '../../API/API'
import { GET_PRODUCTS, PURCHASE } from '../actionType'
function getProducts(data) {
  return { type: GET_PRODUCTS, payload: data }
}
function purchase(data) {
  return { type: PURCHASE, payload: data }
}
export const findAll = () => dispatch => {
  get('/api/find').then(res => {
    if (res.code === 0) {
      dispatch(getProducts(res.data))
    }
  })
}
export const purchaseProduct = ({ userID, proID }) => dispatch => {
  put('/api/buy/', { userID, proID }).then(res => {
    if (res.code === 0) {
      dispatch(purchase(res.data))
    }
  })
}
