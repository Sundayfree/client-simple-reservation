import React from 'react'
import FooterStyle from './Footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faYoutube,
  faTwitter,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'
const FooterCompo = () => {
  return (
    <div style={{ marginTop: '-15px' }}>
      <div className={FooterStyle.containerFooter}>
        <hr />
        <ul className={FooterStyle.ulFooter}>
          <li className={FooterStyle.liFoot}>
            <a href="https://www.facebook.com/" className={FooterStyle.aFooter}>
              <FontAwesomeIcon
                icon={faFacebook}
                style={{ fontSize: '2.2em' }}
              />
            </a>
          </li>
          <li className={FooterStyle.liFoot}>
            <a href="https://www.youtube.com/" className={FooterStyle.aFooter}>
              <FontAwesomeIcon icon={faYoutube} style={{ fontSize: '2.2em' }} />
            </a>
          </li>
          <li className={FooterStyle.liFoot}>
            <a
              href="https://twitter.com/?lang=en"
              className={FooterStyle.aFooter}
            >
              <FontAwesomeIcon icon={faTwitter} style={{ fontSize: '2.2em' }} />
            </a>
          </li>
          <li className={FooterStyle.liFoot}>
            <a
              href="https://www.instagram.com/?hl=en"
              className={FooterStyle.aFooter}
            >
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ fontSize: '2.2em' }}
              />
            </a>
          </li>
        </ul>
        <div className={FooterStyle.imgFooter}>
          <img
            src={require('../../../images/app.png')}
            style={{ padding: '0 10px' }}
          />
          <img src={require('../../../images/google.png')} alt="" />
        </div>
        <div className={FooterStyle.textFooter}>
          <p>2019 @ Liu</p>
        </div>
      </div>
    </div>
  )
}

export default FooterCompo
