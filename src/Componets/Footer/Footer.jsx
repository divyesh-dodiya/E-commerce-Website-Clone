import React from 'react'
import "./footer.css"
// import footer_logo from "../Assets/logo_big.png"
import logo from "../Assets/logo.png"
import insta from "../Assets/instagram_icon.png"
import pint from "../Assets/pintester_icon.png"
import Wup from "../Assets/whatsapp_icon.png"



function Footer() {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={logo} alt=''/>
            <p>Trendly</p>
        </div>
        <ul>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>

        </ul>
        <div className='footer-social-icon'>
             <div className='footer-icons-container'>
                <img src={insta} alt=''/>
             </div>
             <div className='footer-icons-container'>
                <img src={pint} alt=''/>
             </div>
             <div className='footer-icons-container'>
                <img src={Wup} alt=''/>
             </div>
        </div>
        <div className='footer-copyright'>
            <hr/>
            <p>Copyright &#169; 2023 - All Right Reserved</p>
        </div>

    </div>
  )
}

export default Footer