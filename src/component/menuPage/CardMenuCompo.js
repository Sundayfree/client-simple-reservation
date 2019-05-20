import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Modal } from 'react-bootstrap'
import CardMenuStyle from './CardMenu.module.scss'
import { purchaseProduct } from '../../redux/action/products.action'

class CardMenuCompo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show1: false,
      show2: false,
      order: {}
    }
  }

  handlePurchase = () => {
    if (!this.props.users.isAuth) {
      this.setState({ show1: true })
      return
    }

    this.setState({ show2: true })
  }
  handleConform = () => {
    this.state.order.proID = this.props.proID
    this.state.order.userID = this.props.users.userID

    this.props.purchaseProduct(this.state.order)
    this.setState({ show2: false })
  }
  handleClose1 = () => {
    this.setState({ show1: false })
  }
  handleClose2 = () => {
    this.setState({ show2: false })
  }

  render() {
    return (
      <div>
        <div className={CardMenuStyle.container}>
          <div className={CardMenuStyle.containerCard}>
            <img className={CardMenuStyle.imgCard} src={this.props.prodImg} />

            <div className={CardMenuStyle.contentCard}>
              <div>
                <div>
                  <span>{this.props.prodName}</span>
                </div>
                <div>
                  <span>Price:</span>${this.props.prodPrice}
                </div>
                <div>
                  <span>Description:</span>
                  {this.props.prodDesc}
                </div>
              </div>
            </div>
          </div>
          <div className={CardMenuStyle.btns}>
            <Button
              variant="danger"
              className={CardMenuStyle.btn}
              onClick={this.handlePurchase}
            >
              ORDER NOW
            </Button>
          </div>
        </div>
        <div>
          <Modal show={this.state.show1} onHide={this.handleClose1} size="sm">
            <Modal.Header closeButton>
              <Modal.Title>WARNING...</Modal.Title>
            </Modal.Header>
            <Modal.Body>WOOHOO, YOU HAVEN'T LOGGED IN....</Modal.Body>
          </Modal>
        </div>
        <div>
          <Modal show={this.state.show2} onHide={this.handleClose2} size="sm">
            <Modal.Header closeButton>
              <Modal.Title>INFO</Modal.Title>
            </Modal.Header>
            <Modal.Body>DO YOU CONFORM THE PURCHASE?</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose2}>
                CANCEL
              </Button>
              <Button variant="primary" onClick={this.handleConform}>
                CONFIRM
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  users: state.users
})
const mapDispatchToProps = { purchaseProduct }
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardMenuCompo)
