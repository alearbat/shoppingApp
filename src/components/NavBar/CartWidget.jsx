import React from 'react'
import './NavBar.css';
import logo from '../../assets/shopping-cart.webp'

const CartWidget = () => {
  return(
    <div><img className="cart" src={logo} alt="cart"/>MI CARRITO</div>
  )
}

export default CartWidget