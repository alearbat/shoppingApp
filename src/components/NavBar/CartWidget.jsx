import React from 'react'
import '../../css/NavBar.css';
import logo from '../../assets/shopping-cart.webp';
import { useShoppingCart } from '../../context/cartContext';

const CartWidget = () => {

  const {getUnits, empty}= useShoppingCart();

  return(
    <>
      { !empty &&
        <div className="cart-button">
          <img className="cart" src={logo} alt="cart"/>
          <p className="cart-units">{getUnits()}</p>
        </div>
      }
    </>
  )
}

export default CartWidget;