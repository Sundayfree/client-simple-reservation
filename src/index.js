import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { combineReducers } from 'redux'
import { users } from './redux/reducers/users.reducer'
import { products } from './redux/reducers/products.reducer'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'

const reducers = combineReducers({ users, products })
const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
