import React, { useContext } from 'react'
import './productDisplay.css'
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import { ShopContext } from '../../Context/ShopContext';

function ProductDisplay(props) {
    const {product} = props;
    const {addtoCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
        <div className='productdisplay-left'>
            <div className='productdisplay-img-list'>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
            </div>
            <div className='productdisplay-img'>
                <img className="productdisplay-main-img"  src={product.image} alt=''/>
            </div>
        </div>
        <div className='productdisplay-right'>
            <h1>{product.name}</h1>
            <div className='productdiplay-right-stars'  >
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_dull_icon} alt=''/>
                <p>(369)</p>
            </div>
            <div className='productdisplay-right-prices'>
                <div className='productdisplay-right-price-old'>
                    ${product.old_price}
                </div>
                <div className='productdisplay-right-price-new'>
                    ${product.new_price}
                </div>
            </div>
            <div className='productdisplay-right-description'>
            Anti Bacterial: Designed with Van Heusen's Anti-Bacterial technology, our thermal keeps you cool, dry and comfortable while making the thermal look new for long. Stay fresh for longer.
            </div>
            <div className='productdisplay-right-size'>
                <h1>Select Size</h1>
                <div className='productdisplay-right-sizes'>
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXl</div>
                </div>
            </div>
            <button onClick={()=>{addtoCart(product.id)}}>ADD TO CART</button>
            <p className='productdisplay-right-category'>
                <span>Category:</span> Women , T-shirt, Crop Top
            </p>
            <p className='productdisplay-right-category'>
                <span>Tags:</span> Modern , Latest
            </p>
            
        </div>
    </div>
  )
}

export default ProductDisplay