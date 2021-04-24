import React from 'react'
import './NavBar.css';
import logo from '../../assets/shopping-cart.webp'

const CartWidget = () => {
  return(
      <a href=""><img className="cart" src={logo} alt="cart"/>MI CARRITO</a>
  )
}

export default CartWidget