import React from 'react'
import './CSS/cart.css'
const Cart = () => {
  return (
    <div>
     <div className='Information'>
             <table>
              <tr>Products</tr>
              <tr>title</tr>
              <tr>price</tr>
              <tr>Quantity</tr>
              <tr>Total</tr>
             </table>
             <hr className='linee'/>
     </div>
     <div className='direction'>
       <div className='CartTotals'>
          <h1>Cart Totals</h1>
          <p>Subtotal:</p>
          <hr />
          <p>Shipping:</p>
          <hr/>
          <h1 className='total'>Total:</h1>
        </div>
       <div>
        <h1>Find in the store</h1>
       </div>
     </div>
    </div>
  )
}

export default Cart
