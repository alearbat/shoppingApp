import React from 'react'
import Item from './Item'
// import '../../css/ItemList.css'

const ItemList = ({products}) => {
  return(
    <>
      {products.map(({id, image, name, code, price, stock}) =>
      <div key={id}>
        <Item ide={id} img={image} title={name} code={code} price={price} stock={stock}/>
      </div>
      )}
    </>
  )
}

export default ItemList