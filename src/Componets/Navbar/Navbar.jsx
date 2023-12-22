import React, { useContext, useState } from 'react'
import "./navbar.css"
import logo from "../Assets/logo.png"
import cart_icon from "../Assets/cart_icon.png"
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

function Navbar() {


    const [menu,setMenu] = useState("shop")
    const {getTotalCartItems} = useContext(ShopContext)
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt='Logo'/>
            <p>TRENDLY</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to={"/"}>Shop</Link>{menu=="shop"?<hr/>:<></>}</li>            
            <li onClick={()=>{setMenu("Men")}}><Link style={{textDecoration:'none'}} to={"/mens"}>Mens</Link>{menu=="Men"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Women")}}><Link style={{textDecoration:'none'}} to={"/womens"}>Womens</Link>{menu=="Women"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Kid")}}><Link style={{textDecoration:'none'}} to={"/kids"}>Kids</Link>{menu=="Kid"?<hr/>:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
          <Link to={'/login'}>  <button >Login</button></Link>
            <Link to={'/cart'}><img src={cart_icon} alt='Icon'/></Link>
            <div className='nav-cart-count'>{getTotalCartItems()}</div>
        </div>

    </div>
  )
}

export default Navbar