import React from 'react'
import './loading.css'

const LoadingComponent = () => {
  return (
    <div className='m-20 h-[80vh]'>
        <div className='skeleton card_headline'></div>
        <div className='skeleton card_text'></div>
        <div className='skeleton card_text'></div>

        <div className='skeleton card_body'></div>


        

        <div className='skeleton card_footer'></div>
        <div className='skeleton card_footer'></div>

        <div className='skeleton card_text'></div>

    </div>
  )
}

export default LoadingComponent