import React from 'react'
import { Link } from 'react-router-dom'
import ItemCountContainer from '../../container/ItemCountContainer'
import '../../css/Item.css'

const Item = (props)=> {

  const {id, img, title, code, price, stock} = props;
  
  return (
    <>
      <div className="card col-lg-3 col-md-4 col-sm-5 col-12">
        <Link to={`/item/${id}`}><img src={img} className="card-img-top" alt="producto"></img></Link>
        <div>{code}</div>
        <div>{title}</div>
        <div>$ {price}</div>
        <div>
          <ItemCountContainer id={id} stock={stock} Item={props}/>
        </div>
      </div>
    </>
  )
}

export default Item