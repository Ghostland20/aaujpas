import React from 'react'
import './footer.css'

import { FaXTwitter, FaWhatsapp, FaFacebook, FaLinkedin } from "react-icons/fa6";

const year = new Date().getFullYear()

const Footer = () => {
  return (
    <footer>
      <p>Copyright © 2018 - {year}  AAUJPAS. All rights reserved</p>
      <div className='socials'>
        <FaWhatsapp className='social-btn'/>
        <FaXTwitter className='social-btn'/>
        <FaFacebook className='social-btn'/>
        <FaLinkedin className='social-btn'/>
      </div>
    </footer>
  )
}

export default Footer