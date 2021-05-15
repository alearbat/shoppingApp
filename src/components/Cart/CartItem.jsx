import React from 'react'
import { useShoppingCart } from '../../context/cartContext';
import '../../css/Cart.css'

export const CartItem = (props) => {

  const {code, id, img, price, qty, stock, title, totalPrice} = props;
  const {removeItems} = useShoppingCart();

  return(
    <>
      <div className="row d-flex align-items-center">
        <img className="image-product col-lg-2 col-md-2 col-sm-2 col-12" src={img} alt="Imagen del producto"/>
        <div className="col-lg-4 col-md-4 col-sm-4 col-12">
          <h2>{code} - {title}</h2>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 col-12">
          <p>{qty}</p>
          <button className="remove" onClick={() => removeItems(id)}>Remove</button>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-2 col-12">
         <h2>$ {totalPrice(price, qty)}</h2>
        </div>
      </div>
    </>
  )
}
// <section class="shopping-bg">
//     <h1 className="title">Tu carrito de compras</h1>
//     <div class="row d-flex justify-content-center product">
//       <div className="col-lg-12 col-md-12 col-xs-12 col-12">
//<p className="noItem">Aun no has agregado productos</p>
//</div>
//       <!--List of products selected-->
//       <ul id="selectedProductsContainer" class="col-xl-12 col-md-12 col-sm-12 col-12"> 
//       </ul>
//       
//       <!--Cart buttons-->
//       <div class="d-flex justify-content-center col-lg-12 col-7">
//         <button type="button" class="emptyCart btn btn-secondary col-lg-2 col-md-4 col-sm-6 col-12" style="display:none">Vaciar Carrito</button>
//         <button id="Buy" type="button" class="emptyCart btn btn-primary col-lg-2 col-md-4 col-sm-6 col-12" style="display:none" data-toggle="modal" data-target="#boughtModal">Comprar</button>
//       </div>
//     </div>
//     <div class="row fixed d-flex justify-content-end btn-whatsapp">
//       <a class="col-xl-1 col-md-1 col-sm-2 col-3" href="https://api.whatsapp.com/send?phone=541167958390" target="_blank">
//         <img src="../img/whatsapp.svg" alt="whatsapp Plant-Ar">
//       </a>
//     </div>
//   </section>