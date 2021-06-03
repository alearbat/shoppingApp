import React from 'react';
import { CartList } from '../components/Cart/CartList.jsx';
import { useShoppingCart } from '../context/cartContext';
import { Spinner } from 'react-bootstrap';
import '../css/Cart.css';
import whatsapp from '../assets/whatsapp.svg';

const CartListContainer = () => {

  const { cartItems, clearItems } = useShoppingCart(); 

  // Calculate total price of an item
  const totalPrice = (price, qty) => {
    const totalPrice = price * qty;
    return totalPrice;
  }

  // Calculate the final price of the purchase
  const finalPrice = () => {
    const filter = [...cartItems];
    let price = 0;
    filter.forEach (i => {
      price = price + i.price * i.qty;
    })
    return price;
  }

  return ( 
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <h1 className="title d-flex justify-content-center col-lg-12 col-md-12 col-xs-12 col-12">TU CARRITO DE COMPRAS</h1>
          <div className="d-flex justify-content-center col-lg-12 col-md-12 col-xs-12 col-12">
            {cartItems ? <CartList cartItems={cartItems} clearItems={clearItems} finalPrice={finalPrice()} totalPrice={totalPrice}/> : <Spinner className="spinner" animation="border" variant="success" />}
          </div>
        </div>
        <div className="row fixed d-flex justify-content-end btn-whatsapp">
          <a className="col-xl-1 col-md-1 col-sm-2 col-3" href="https://api.whatsapp.com/send?phone=541167958390" target="_blank" rel="noreferrer">
            <img className="whatsapp" src={whatsapp} alt="whatsapp"/>
          </a>
        </div>
      </div>
    </>
  )
}

export default CartListContainer;