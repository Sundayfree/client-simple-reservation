import React from 'react'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import NavStyle from './Nav.module.scss'
const NavCompo = () => {
  return (
    <div>
      <Nav>
        <Nav.Item className={NavStyle.itemNav}>
          <Link to="/" className={NavStyle.linkNav}>
            <b>HOME</b>
          </Link>
        </Nav.Item>
        <Nav.Item className={NavStyle.itemNav}>
          <Link to="menu" className={NavStyle.linkNav}>
            <b>MENU</b>
          </Link>
        </Nav.Item>
      </Nav>
    </div>
  )
}

export default NavCompo
