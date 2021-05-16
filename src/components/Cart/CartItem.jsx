import React from 'react'
import { useShoppingCart } from '../../context/cartContext';
import '../../css/Cart.css'

export const CartItem = (props) => {

  const {code, id, image, price, qty, stock, name, totalPrice} = props;
  const {removeItems} = useShoppingCart();

  return(
    <>
      <div className="row d-flex align-items-center">
        <img className="image-product col-lg-2 col-md-2 col-sm-2 col-12" src={image} alt="Imagen del producto"/>
        <div className="col-lg-4 col-md-4 col-sm-4 col-12">
          <h2>{code} - {name}</h2>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 col-12">
          <p>{qty}</p>
          <button className="button" onClick={() => removeItems(id)}>Remove</button>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-2 col-12">
         <h2>$ {totalPrice(price, qty)}</h2>
        </div>
      </div>
    </>
  )
}

//     <div class="row fixed d-flex justify-content-end btn-whatsapp">
//       <a class="col-xl-1 col-md-1 col-sm-2 col-3" href="https://api.whatsapp.com/send?phone=541167958390" target="_blank">
//         <img src="../img/whatsapp.svg" alt="whatsapp Plant-Ar">
//       </a>
//     </div>
//   </section>