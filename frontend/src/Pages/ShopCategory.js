import React from 'react'
import './CSS/ShopCategory.css'
import {cat_imag} from '../Components/Assets/cat_prod.js'
import Itemm from '../Components/Item/Itemm.js'
import Popular from '../Components/Popular/Popular.js'
import Button from '../Components/Button/Button.js'
import Footer from '../Components/Footer/Footer.js'

const ShopCategory = (props) => {
  return (
    <div className="shop-category-main">
      <div className='shop-category'>
        <div className='banner-data'>
          <h1>FLAT 50% OFF</h1>
          <button>Explore Now</button>
        </div>
        <div className='banner-img'>
          <img src={props.banner} alt="" />
        </div>
      </div>
      <div className="shop_sub_head">
        <h1>Categories</h1>
      </div>
      <div className="categories">
        {cat_imag.map((item,i)=>{
          if(props.category===item.category){
            return <Itemm key={i} id={item.id} type={item.type} category={item.category} image={item.image} link={item.link} />
          }
          else if(props.category===item.category){
            return <Itemm key={i} id={item.id} type={item.type} category={item.category} image={item.image} link={item.link}/>
          }
          else if(props.category===item.category){
            return <Itemm key={i} id={item.id} type={item.type} category={item.category} image={item.image} link={item.link}/>
          }
          else
          return null;
        })
        }
      </div>
      <div className='popular'>
        <Popular category={props.category}/>
      </div>
      <div>
        <Button content="Show All"/>
      </div>
      <div className="footer">
        <Footer/>
      </div>
      
    </div>
    
  )
}

export default ShopCategory
