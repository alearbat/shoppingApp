import React from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'
import '../../css/Item.css'

const Item = ({ide, img, title, code, price, stock})=> {

  return (
    <>
      <div className="card col-lg-3 col-md-4 col-sm-5 col-12">
        <Link to={`/item/${ide}`}><img src={img} className="card-img-top" alt="producto"></img></Link>
        <div>{code}</div>
        <div>{title}</div>
        <div>$ {price}</div>
        <div>
          <ItemCount stock={stock}/>
        </div>
      </div>
    </>
  )
}

export default Item