import React from 'react'
import { products_men } from '../Assets/mens_products'
import Item from '../Item/Item'
import '../TopWear/Topwear.css'

const Topwear = (props) => {
  return (
    <div className='topwear'>
      <h1>{props.type.toUpperCase()}</h1>
      <div className="products">
        {
          products_men.map((item,i)=>{
            if(item.type === props.type && item.category === props.category){
              return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            }
          })
        }
      </div>
    </div>
  )
}

export default Topwear
