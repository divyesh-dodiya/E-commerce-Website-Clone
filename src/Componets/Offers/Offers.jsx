import React from 'react'
import './offers.css'
import exclusive_image from "../Assets/exclusive_image.png"

function Offers() {
  return (
    <div className='offers'>
        <div className='offers-left'>
            <h1>EXCLUSIVE</h1>
            <h1>offers for you</h1>
            <p>ONLY ON BEST PRODUCT DELLERS</p>
            <button>check now</button>
        </div>
        <div className='offers-right'>
            <img src={exclusive_image} alt=''/>
        </div>
    </div>
  )
}

export default Offers