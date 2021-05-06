import React, {useState} from 'react'
import ItemCount from '../components/Items/ItemCount'

const ItemCountContainer = ({stock}) => {
  const [stockTotal, setStockTotal] = useState(stock)
  const [unitsToBuy, setUnitsToBuy] = useState(1)

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
      <ItemCount stockTotal={stockTotal} unitsToBuy={unitsToBuy} sum={sum} subtract={subtract} onAdd={onAdd}/>
    </>
  )
}

export default ItemCountContainer