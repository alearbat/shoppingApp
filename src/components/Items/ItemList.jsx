import React from 'react';
import Item from './Item';

const ItemList = ({products}) => {
  
  return(
    <>
      {products.map((product) =>
      <div key={product.id}>
        <Item product={product}/>
      </div>
      )}
    </>
  )
}

export default ItemList