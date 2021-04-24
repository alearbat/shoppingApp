import React from 'react'
import ItemCount from './ItemCount'
import '../../css/Item.css'

const Item = ({img, title, code, price, stock})=> {

  return (
    <>
      <div className="card">
        <img src={img} className="card-img-top" alt="producto"></img>
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