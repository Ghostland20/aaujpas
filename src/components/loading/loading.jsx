import React from 'react'
import './loading.css'

const LoadingComponent = () => {
  return (
    <div className=' flex flex-col item-center justify-center  h-[80vh] p-10 '>

        <div className='skeleton card_headline'></div>
        <div className='skeleton card_footer'></div>
        <div className='skeleton card_text'></div>
        <div className='skeleton card_text'></div>
        <div className='skeleton card_footer'></div>
        <div className='skeleton card_footer'></div>

        <div className='skeleton card_body'></div>

        <div className='skeleton card_footer'></div>
        <div className='skeleton card_footer'></div>

        <div className='skeleton card_text'></div>
        <div className='skeleton card_footer'></div>
        <div className='skeleton card_footer'></div>

    </div>
  )
}

export default LoadingComponent