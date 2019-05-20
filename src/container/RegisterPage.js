import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Button, Form, Modal } from 'react-bootstrap'
import { register } from '../redux/action/users.action'
import RegisterStyle from './Register.module.scss'
import FootLogin from '../component/loginpage/FootLogin'
export class RegisterPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      repassword: '',
      email: '',
      show: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleBack = this.handleBack.bind(this)
    this.handleRegister = this.handleRegister.bind(this)
  }
  handleChange(e) {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }
  handleBack() {
    this.props.history.go(-1)
  }
  handleClose = () => {
    this.setState({ show: false })
    this.props.history.push('/signin')
  }

  handleRegister() {
    this.props.register(this.state)
    this.setState({ show: true })
  }

  render() {
    return (
      <div className={RegisterStyle.containerRe}>
        <div className={RegisterStyle.headerRe}>
          <h1 className={RegisterStyle.titleRe}>CREATE AN ACCOUNT</h1>
        </div>

        <Form className={RegisterStyle.formRe}>
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
          <Form.Group>
            <Form.Label>REPASSWORD:</Form.Label>
            <Form.Control
              type="password"
              placeholder="please enter your password again"
              name="repassword"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>EMAIL:</Form.Label>
            <Form.Control
              type="email"
              placeholder="please enter your email"
              name="email"
              onChange={this.handleChange}
            />
          </Form.Group>
          <div className={RegisterStyle.btnFormRe}>
            <Button
              variant="secondary"
              className={RegisterStyle.leftBtn}
              type="button"
              onClick={this.handleBack}
            >
              BACK
            </Button>
            <Button
              variant="danger"
              type="button"
              onClick={this.handleRegister}
            >
              SIGN UP
            </Button>
          </div>
        </Form>
        <FootLogin />
        <div>
          <Modal show={this.state.show} onHide={this.handleClose} size="sm">
            <Modal.Header closeButton>
              <Modal.Title>Congralution...</Modal.Title>
            </Modal.Header>
            <Modal.Body>Register success!! Direct you to login</Modal.Body>
          </Modal>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  state
})
const mapDispatchToProps = { register }
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterPage)
