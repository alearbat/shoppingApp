import React from 'react'
import { CartList } from '../components/Cart/CartList.jsx'
import { useShoppingCart } from '../context/cartContext'
import loader from '../assets/loader.png'
import '../css/Cart.css'

const CartListContainer = () => {

  const { cartItems, clearItems } = useShoppingCart(); 

  // Calculate total price of an item
  const totalPrice = (price, qty) => {
    const totalPrice = price * qty;
    return totalPrice
  }

  return ( 
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <h1 className="title d-flex justify-content-center col-lg-12 col-md-12 col-xs-12 col-12">TU CARRITO DE COMPRAS</h1>
          <div className="d-flex justify-content-center col-lg-12 col-md-12 col-xs-12 col-12">
            {cartItems ? <CartList cartItems={cartItems} clearItems={clearItems} totalPrice={totalPrice}/> : <img src={loader} className="loader" alt="Loading"/>}
          </div>
        </div>
      </div>
    </>
  )
}

export default CartListContainer