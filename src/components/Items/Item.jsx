import React from 'react'
import { Link } from 'react-router-dom'
import ItemCountContainer from '../../container/ItemCountContainer'
import '../../css/Item.css'

const Item = ({ product })=> {

  const { id, image, name, code, price, stock } = product;

  return (
    <>
      <div className="card col-lg-3 col-md-4 col-sm-5 col-12">
        <Link to={`/item/${id}`}><img src={image} className="card-img-top" alt="producto"></img></Link>
        <div>{code}</div>
        <div>{name}</div>
        <div>$ {price}</div>
        <div>
          <ItemCountContainer id={id} stock={stock} Item={product}/>
        </div>
      </div>
    </>
  )
}

export default Item