import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  Row,
  Container,
  Col,
  Image,
  Badge,
  Button,
  Spinner
} from 'react-bootstrap'
import NavCompo from '../component/homepage/nav/NavCompo'
import FooterCompo from '../component/homepage/footer/FooterCompo'
import CardMenuCompo from '../component/menuPage/CardMenuCompo'
import { logout } from '../redux/action/users.action'
import { findAll } from '../redux/action/products.action'
import img from '../images/img.jpeg'
import MenuStyle from './Menu.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-regular-svg-icons'

export class MenuPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      num: 0
    }
  }

  componentWillMount() {
    this.props.findAll()
  }

  handleLogout = () => {
    this.props.logout()
    this.props.history.push('/signin')
  }
  render() {
    const products = this.props.state.products.product
    const isLoading = this.props.state.products.isLoading
    return (
      <div>
        <div className={MenuStyle.header}>
          <div className={MenuStyle.headerApp}>
            <Container>
              <Row className={MenuStyle.rowHeader}>
                <Col className={MenuStyle.colHeader}>
                  <Link
                    to="/"
                    style={{ textDecoration: 'none', color: '#454545' }}
                  >
                    <Image
                      src={img}
                      roundedCircle
                      className={MenuStyle.imgHeader}
                    />
                    <b style={{ verticalAlign: '-2px', marginLeft: '5px' }}>
                      WELTEC
                    </b>
                  </Link>
                </Col>
                <Col xs={6} className={MenuStyle.colHeader}>
                  <NavCompo />
                </Col>
                <Col className={MenuStyle.colHeader}>
                  {this.props.state.users.isAuth ? (
                    <div>
                      <Image
                        src={require('../images/thanos.jpeg')}
                        className={MenuStyle.avatar}
                        roundedCircle
                      />
                      <b className={MenuStyle.account}>
                        {this.props.state.users.username}
                      </b>
                      <Button
                        variant="link"
                        onClick={this.handleLogout}
                        className={MenuStyle.logoutBtn}
                      >
                        LOGOUT
                      </Button>
                    </div>
                  ) : (
                    <div>
                      <Link
                        to="/signin"
                        style={{ textDecoration: 'none', color: '#454545' }}
                      >
                        <FontAwesomeIcon
                          icon={faUserCircle}
                          className={MenuStyle.fontHeader}
                        />
                        <b className={MenuStyle.accoutHeader}>MY ACCOUNT</b>
                      </Link>
                    </div>
                  )}
                </Col>
              </Row>
            </Container>
          </div>
          <div className={MenuStyle.card}>
            {isLoading ? (
              products.map((p, i) => {
                return <CardMenuCompo {...p} key={i} />
              })
            ) : (
              <Spinner
                animation="border"
                role="status"
                className={MenuStyle.spinner}
              />
            )}
          </div>
        </div>

        <FooterCompo />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  state
})
const mapDispatchToProps = { logout, findAll }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuPage)
