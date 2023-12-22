import React from 'react'
import "./relatedProduct.css"
import data_product from '../Assets/data'
import Item from '../Items/Item'

function RelatedProduct() {
  return (
    <div className='relatedProducts'>
        <h1>Realated Products</h1>
        <hr/>
        <div className='relatedProducts-item'>
            {data_product.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default RelatedProduct