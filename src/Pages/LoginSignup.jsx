import React from 'react'
import "./CSS/loginsignUp.css"

function LoginSignup() {
  return (
    <div className='loginSignup'>
      <div className='loginSignup-container'>
        <h1>SignUp</h1>
        <div className='loginSignup-fields'>
          <input type='text' placeholder='Your Name'/>
          <input type='email' placeholder='Your Email Address'/>
          <input type='password' placeholder='Your Password'/>
        </div>
        <button>Continue</button>
        <p className='loginSignup-login'>Already have an account?<span> Login here</span></p>
        <div className='loginSignup-agree'>
          <input type='checkbox' name='' id=''/>
          <p>By countinuing, i agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup