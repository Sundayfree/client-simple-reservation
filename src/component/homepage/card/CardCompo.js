import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import CardStyle from './Card.module.scss'
export default class componentName extends Component {
  render() {
    return (
      <div>
        <Card elementType="div" border="light" className={CardStyle.card}>
          <Card.Img
            className={CardStyle.cardImg}
            src={require('../../../images/shake.jpg')}
          />
        </Card>
      </div>
    )
  }
}
