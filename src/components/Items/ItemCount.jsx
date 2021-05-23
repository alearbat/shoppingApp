import React from 'react'
import '../../css/ItemCount.css'

const ItemCount = ({ stockTotal, unitsToBuy, sum, subtract, onAdd, status }) => {

  return (
    <>
      <div className='units'>
        <button className='btn' onClick={subtract} disabled={unitsToBuy === 1}>-</button>
        <p>{unitsToBuy}</p>
        <button className='btn' onClick={sum} disabled={stockTotal === 0}>+</button>
      </div>
      <div>
        <p className="fin-stock">{status}</p>
      </div>
      <button className='btn' onClick={onAdd}>Agregar al carrito</button>
    </>
  )
}

export default ItemCount
