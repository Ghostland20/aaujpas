import React from 'react'
import './navbar.css'
import { images } from '../../assets'

const Navbar = () => {
  return (
    <div className='nav__container'>
        <div className='header'>
          <div className='logo'>
            <img src={images.logo} alt="" className='w-full'/>
          </div>
          <div className='header-text'>
            <span>AMBROSE ALLI UNIVERSITY</span>
            <span>JOURNAL OF PHYSICAL & APPLIED SCIENCES (JPAS)</span>
          </div>
        </div>



        <nav className='navbar'>
          <a href='/'>
           <div className=' btn'>
            Home
          </div>
          </a>

          <a href='/editorial'>
           <div className=' btn'>
            Editorial Board
          </div>
          </a>

          <a href='/guidelines'>
           <div className=' btn'>
            Author Guidelines
          </div>
          </a>

          <a href='/papers'>
           <div className=' btn'>
            Call for Papers
          </div>
          </a>

          <a href='/archive'>
           <div className=' btn'>
            Archives
          </div>
          </a>

          <a href='/contact'>
           <div className=' btn'>
            Contact
          </div>
          </a>
        </nav>

    </div>
  )
}

export default Navbar