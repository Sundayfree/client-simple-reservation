import { post } from '../../API/API'
import { LOGIN_SUCCESS, ERROR_MSG, LOG_OUT, REGISTER } from '../actionType'

function loginSuccess(data) {
  return { type: LOGIN_SUCCESS, users: data }
}
function errorMsg(msg) {
  return { type: ERROR_MSG, msg }
}
function registerSuccess(data) {
  return { type: REGISTER, users: data }
}
export const register = ({ username, password, repassword, email }) => {
  if (password !== repassword) {
    errorMsg('Password and repassword not match..')
  }
  return dispatch => {
    post('/api/signup', { username, password, repassword, email }).then(res => {
      if (res.code === 0) {
        dispatch(registerSuccess(res.data))
      } else {
        dispatch(errorMsg(res.msg))
      }
    })
  }
}

export const logout = () => ({ type: LOG_OUT })

export function signIn({ username, password }) {
  return dispatch => {
    post('/api/signin', { username, password }).then(res => {
      if (res.code === 0) {
        dispatch(loginSuccess(res.data))
      } else {
        dispatch(errorMsg(res.msg))
      }
    })
  }
}
