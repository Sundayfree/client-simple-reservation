import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { Button, Form } from 'react-bootstrap'
import { signIn } from '../redux/action/users.action'
import FootLogin from '../component/loginpage/FootLogin'
import LoginStyle from './Login.module.scss'

export class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
  }
  handleChange(e) {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit() {
    this.props.signIn(this.state)
  }
  handleCancel(e) {
    this.props.history.push('/')
  }

  render() {
    return (
      <div className={LoginStyle.containerLogin}>
        {this.props.state.users.isAuth ? <Redirect to={'/'} /> : null}
        <div className={LoginStyle.headerLogin}>
          <h1 className={LoginStyle.titleLogin}>LOG IN</h1>
        </div>
        <div className={LoginStyle.container}>
          <div className={LoginStyle.rightContainer}>
            <h3 className={LoginStyle.titleR}>Not signed up yet?</h3>
            <p className={LoginStyle.pTitle}>
              Create an account to enjoy a faster ordering experience.
            </p>
            <div className={LoginStyle.btnLogin}>
              <Link to="/signup" className={LoginStyle.link}>
                Sign Up
              </Link>
            </div>
          </div>
          <div />
          <div>
            <Form className={LoginStyle.form}>
              <Form.Group>
                <Form.Label>USERNAME: </Form.Label>
                <Form.Control
                  type="username"
                  placeholder="Please enter your username"
                  name="username"
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>PASSWORD:</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="please enter your password"
                  name="password"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <div className={LoginStyle.btnForm}>
                <Button
                  variant="secondary"
                  type="button"
                  onClick={this.handleCancel}
                >
                  CANCEL
                </Button>
                <Button
                  variant="danger"
                  type="button"
                  className={LoginStyle.righBtn}
                  onClick={this.handleSubmit}
                >
                  LOG IN
                </Button>
              </div>
            </Form>
          </div>
        </div>
        <FootLogin />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  state
})
const mapDispatchToProps = {
  signIn
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage)
