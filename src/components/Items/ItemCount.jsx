import React, {useState} from 'react'

const ItemCount = ({stock}) => {

const [stockTotal, setStockTotal] = useState(stock)
const [unitsToBuy, setUnitsToBuy] = useState(1)

let className = ""

const sum = () => {
  if(stockTotal > 0) {
    setUnitsToBuy(unitsToBuy + 1)
    setStockTotal(stockTotal - 1)
  } 
}

const subtract = () => {
  if(unitsToBuy > 1) {
    setUnitsToBuy(unitsToBuy - 1)
    setStockTotal(stockTotal + 1)
  } 
}

const onAdd = () => {
  console.log(stockTotal)
  alert(`Has agregado ${unitsToBuy} unidades al carrito`)
}

  return (
    <>
      <div className='units'>
        <button className='btn' onClick={subtract} disabled={unitsToBuy === 1}>-</button>
        <p>{unitsToBuy}</p>
        <button className='btn' onClick={sum} disabled={stockTotal === 0}>+</button>
      </div>
      <button className='btn' onClick={onAdd}>Agregar al carrito</button>
    </>
  )
}

export default ItemCount
