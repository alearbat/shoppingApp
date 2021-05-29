import React from 'react'
import { useShoppingCart } from '../../context/cartContext';
import '../../css/Cart.css'
import { Link } from 'react-router-dom'

export const CartItem = (props) => {

  const {code, id, image, price, qty, name, totalPrice} = props;
  const {removeItems} = useShoppingCart();

  return(
    <>
      <div className="row d-flex align-items-center">
      <img className="image-product col-lg-2 col-md-2 col-sm-2 col-6" src={image} alt="Imagen del producto"/>
        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
        <Link to={`/item/${id}`}><h2>{code} - {name}</h2></Link>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-3 col-6">
          <p>{qty}</p>
        </div>
        <div className="col-lg-1 col-md-1 col-sm-1 col-6">
          <button onClick={() => removeItems(id)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
            </svg>
          </button>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-2 col-12">
         <h2>$ {totalPrice(price, qty)}</h2>
        </div>
      </div>
    </>
  )
}
