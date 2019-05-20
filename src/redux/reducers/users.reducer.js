import { LOGIN_SUCCESS, ERROR_MSG, LOG_OUT, REGISTER } from '../actionType'

const initState = {
  userID: '',
  username: '',
  isAuth: false,
  msg: ''
}

export const users = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, isAuth: true, msg: '', ...action.users }
    case ERROR_MSG:
      return { ...state, msg: action.msg }
    case LOG_OUT:
      return { ...state, ...initState }
    case REGISTER:
      return { ...state, msg: action.msg }
    default:
      return state
  }
}
