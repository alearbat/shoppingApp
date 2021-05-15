import React from 'react'
import { CartItem } from './CartItem'
import '../../css/Cart.css'

export const CartList = ({cartItems, totalPrice}) => {

  return(
    <>
    <div style={{ display: cartItems.length == 0 ? "none" : "block" }} className="shopping-bg" >
      {cartItems.map((cartItem) =>
      <div key={cartItem.id}>
        <CartItem {...cartItem} totalPrice={totalPrice}/>
      </div>
      )}
    </div>
    </>
  )
}
