import React from 'react'
import './archive.css'
import { Link } from 'react-router-dom'

const Archive = () => {
  return (
    <div className='content_ac'>    
            <span className='head'><b>CONTENTS</b></span> 
            
            <div className='info'>
            <p>Permission is granted to distribute any article in this journal for non-profit, educational purposes if it is copied in its 
            entirety and the journal is credited. Please notify the editor if an article is to be used.</p>
            </div>

            <div className='archive_list'>

              <div className='a_item'>
              <span>2023</span>
                <p>VOLUME 3:</p>
                <Link to={`/archive/${"2023"}`}>Number 1</Link>
              </div>

              <div className='a_item'>
              <span>2020</span>
                <p>VOLUME 2:</p>
                <Link to={`/archive/${"2020"}`}>Number 1</Link>
              </div>

              <div className='a_item'>
              <span>2018</span>
                <p>VOLUME 1:</p>
                <Link to={`/archive/${"2018"}`}>Number 1</Link>

              </div>
            </div>

            
        </div>
  )
}

export default Archive