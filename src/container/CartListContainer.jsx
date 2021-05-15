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
          <div className="row card-detail d-flex align-items-center col-lg-12 col-md-12 col-xs-12 col-12">
            {cartItems ? <CartList cartItems={cartItems} totalPrice={totalPrice}/> : <img src={loader} className="loader" alt="Loading"/>}
          </div>
          {/* Cart total */}
          <div className="row card-detail d-flex align-items-center" style={{display: cartItems.length && "none"}}>
            <h5 className="name col-xl-10 col-md-10 col-sm-10"style={{ display: cartItems.length != 0 ? "none" : "block" }}>Aun no tienes productos en el carrito</h5>
            <h5 className="name col-xl-4 col-md-2 col-sm-3" style={{display: !cartItems.length ? "none" : "block"}}>TOTAL</h5><hr/>
            <h5 id="totalPrice" class="price col-xl-3 col-md-2 col-sm-3" style={{display: !cartItems.length ? "none" : "block"}}>$</h5>
            <button onClick={clearItems} style={{display: !cartItems.length && "none"}}>Clear all</button>
          </div>
        </div>
      </div>
    </>
  )
}
// le borre al TOTAL y a totalprice style="display: none" style={"display: none"}

// poner en style: clasName=={display: cartItems.length && "none"} ver si hay que ponerle || en lugar de &&

export default CartListContainer