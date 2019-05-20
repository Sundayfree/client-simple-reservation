import { GET_PRODUCTS, PURCHASE } from '../actionType'

const initState = {
  product: [],
  isLoading: false
}
export const products = (state = initState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, isLoading: true, product: action.payload }
    case PURCHASE:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
