import React from 'react'
import {FaFacebookF} from 'react-icons/fa'
import {IoLogoTwitter} from 'react-icons/io'
import {FiInstagram} from 'react-icons/fi'
import './footer.css'
const footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo' >SAAD</a>

      <ul className='permalinks'>
        <li href='#'>Home</li>
        <li href='#about'>About</li>
        <li href='#experience'>Experience</li>
        <li href='#service'>Service</li>
        <li href='#testimonial'>Testimonials</li>
        <li href='#contact'>Contact</li>
      </ul>

      <div className="footer__socials">
        <a href='https://facebook.com/Saad.Z.Qureshi'><FaFacebookF/></a>
        <a href='https://twitter.com/s_a_a_d_z'><IoLogoTwitter/></a>
        <a href='https://instagram.com/s_a_a_d_.z'><FiInstagram/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Saad Zahid. All rights reserved.</small>
      </div>
    </footer>

   )
}

export default footer