import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Row, Container, Col, Image, Button, Badge } from 'react-bootstrap'
import NavCompo from '../component/homepage/nav/NavCompo'
import CarsouselCompo from '../component/homepage/carousel/CarsouselCompo'
import CardCompo from '../component/homepage/card/CardCompo'
import FooterCompo from '../component/homepage/footer/FooterCompo'
import { logout } from '../redux/action/users.action'
import HomeStyle from './Home.module.scss'
import img from '../images/img.jpeg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-regular-svg-icons'

class HomePage extends Component {
  handleLogout = () => {
    this.props.logout()
    this.props.history.push('/signin')
  }

  render() {
    return (
      <div>
        <div className={HomeStyle.headerApp}>
          <Container>
            <Row className={HomeStyle.rowHeader}>
              <Col className={HomeStyle.colHeader}>
                <Link
                  to="/"
                  style={{ textDecoration: 'none', color: '#454545' }}
                >
                  <Image
                    src={img}
                    roundedCircle
                    className={HomeStyle.imgHeader}
                  />
                  <b style={{ verticalAlign: '-2px', marginLeft: '5px' }}>
                    WELTEC
                  </b>
                </Link>
              </Col>
              <Col xs={6} className={HomeStyle.colHeader}>
                <NavCompo />
              </Col>
              <Col className={HomeStyle.colHeader}>
                {this.props.state.users.isAuth ? (
                  <div>
                    <Image
                      src={require('../images/thanos.jpeg')}
                      className={HomeStyle.avatar}
                      roundedCircle
                    />
                    <b className={HomeStyle.account}>
                      {this.props.state.users.username}
                    </b>
                    <Button
                      variant="link"
                      onClick={this.handleLogout}
                      className={HomeStyle.logoutBtn}
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
                        className={HomeStyle.fontHeader}
                      />
                      <b className={HomeStyle.accoutHeader}>MY ACCOUNT</b>
                    </Link>
                  </div>
                )}
              </Col>
            </Row>
          </Container>
        </div>

        <div className={HomeStyle.placeHolder} />
        <CarsouselCompo />
        <div className={HomeStyle.cardList}>
          <CardCompo />
          <CardCompo />
          <CardCompo />
        </div>
        <div className={HomeStyle.term}>
          <div className={HomeStyle.term}>
            <h2 className={HomeStyle.termDiv}>TERM AND CONDITIONS</h2>
          </div>
        </div>
        <div>
          <FooterCompo />
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  state
})
const mapDispatchToProps = { logout }
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)
