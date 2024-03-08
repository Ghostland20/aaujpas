import React ,{useState} from 'react'
import './navbar.css'
import { images } from '../../assets'
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { HiX } from "react-icons/hi";
import { motion } from 'framer-motion';

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

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

          <div className='relative md:hidden'>
            <HiOutlineMenuAlt3 onClick={()=> setToggle(true)}/>
                {toggle && (
                  <motion.div

                  initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.3, ease: 'linear' }}
                    variants={{
                      visible: { opacity: 1, x: 0 },
                      hidden: { opacity: 0, x: 50 }
                    }}
      
      
                  className='fixed flex top-5 right-3 z-30 pb-10 pr-3 w-[200px] flex-col justify-start items-end bg-[#ffff] rounded-xl shadow-2xl'
                >
                  <HiX className='w-[35px] h-[35px] mt-2 text-[--main] cursor-pointer'onClick={() => setToggle(false)} />

                  <div className='nav-menu '>
                        <a href='/'>
                        <div className='nav-item'>
                          Home
                        </div>
                        </a>
      
                        <a href='/editorial'>
                        <div className='nav-item'>
                          Editorial Board
                        </div>
                        </a>
      
                        <a href='/guidelines'>
                        <div className='nav-item'>
                          Author Guidelines
                        </div>
                        </a>
      
                        <a href='/papers'>
                        <div className='nav-item'>
                          Call for Papers
                        </div>
                        </a>
      
                        <a href='/archive'>
                        <div className='nav-item'>
                          Archives
                        </div>
                        </a>
      
                        <a href='/contact'>
                        <div className='nav-item'>
                          Contact
                        </div>
                        </a>
                  </div>
                </motion.div>
                )}
          </div>
        </div>



        <nav className='navbar hidden md:flex'>
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