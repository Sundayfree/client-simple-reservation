import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import HomePage from './container/HomePage'
import LoginPage from './container/LoginPage'
import RegisterPage from './container/RegisterPage'
import MenuPage from './container/MenuPage'

export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/signin" component={LoginPage} />
            <Route path="/signup" component={RegisterPage} />
            <Route path="/menu" component={MenuPage} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
