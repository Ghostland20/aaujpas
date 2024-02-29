import React from 'react'
import './home.css'
import {images} from '../../assets'

const Home = () => {
  return (
    <div className='home'>
      
      <div className='content_h'>
        <div className='img'>
          <img src={images.book} alt="aaujpas book"/>
        </div>
        <div className='p_text'>
          <p>The Ambrose Alli University Journal of Physical & Applied Sciences (AAUJPAS), the official publication of the Faculty of Physical Sciences (FPS), Ambrose Alli University Ekpoma, Nigeria publishes research papers, review articles, notes and short communications that are of high-quality, original and relevant to fundamental and applied aspects of all areas of physical and applied sciences.</p>

          <p>AAUJPAS aims to provide a platform for scientists and academics to promote, share and discuss fundamental and applied aspects of all areas of physical sciences and technology provided that there are some advances in knowledge presented by the work. The journal provides an articulate and formidable platform to drive and actualize the mission and vision of Ambrose Alli University through science and technology.</p>
        </div>
      </div>

      <div className='newsletter'>
        <span className='span'>SUBCRIBE TO OUR NEWSLETTER</span>
        <form className='form'>
          <input type="text" placeholder='Enter Your Email' className='input' />
          <a href='/newsletter'><div className='btn'>SUBCRIBE</div></a>
        </form>
      </div>

    </div>
  )
}


export default Home
