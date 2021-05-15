import React from 'react'
import { CartItem } from './CartItem'

export const CartList = ({cartItems, totalPrice}) => {

  return(
    <>
    <div className="shopping-bg">
      {cartItems.map((cartItem) =>
      <div key={cartItem.id}>
        <CartItem {...cartItem} totalPrice={totalPrice}/>
      </div>
      )}
    </div>
    </>
  )
}
