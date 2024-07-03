import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faTwitter,
  faYoutube,
  faFacebook,
  faInstagram,
  
} from '@fortawesome/free-brands-svg-icons'
import '../styles/Footer.css'

function footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <FontAwesomeIcon icon={faInstagram} color="black"/> <FontAwesomeIcon icon={faLinkedin} color="black"/> <FontAwesomeIcon icon={faYoutube} color="black"/> <FontAwesomeIcon icon={faFacebook} color="black"/> <FontAwesomeIcon icon={faTwitter} color="black"/>
      </div>
      <p>&copy;2022 Fedricpizza.com</p>
    </div>
  )
}

export default footer