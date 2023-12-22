import React from 'react'
import './hero.css'
import hand_icon from "../Assets/hand_icon.png"
import arrow_icon from "../Assets/arrow.png"
import hero_image from "../Assets/hero_image.png";

function Hero() {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <h2>NEW ADDED ONLY</h2>
            <div className='hand-hand-icon'>
                <p>new</p>
                <img src={hand_icon} alt=''/>
            </div>
            <p>Collections</p>
            <p>for everyone</p>
        </div>
        <div className='hero-latest-btn'>
            <div>latest collection</div>
            <img src={arrow_icon} alt=''/>
        </div>
        <div className='hero-right'>
            <img src={hero_image} alt=''/>
        </div>
    </div>
  )
}

export default Hero