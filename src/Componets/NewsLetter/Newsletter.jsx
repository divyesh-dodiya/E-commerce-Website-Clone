import React from 'react'
import './newsletter.css'

function Newsletter() {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers on Your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div>
            <input type='email' placeholder='Your Email '/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default Newsletter