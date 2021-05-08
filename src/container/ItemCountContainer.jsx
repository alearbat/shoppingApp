import React, { useState , useEffect} from 'react'
import ItemCount from '../components/Items/ItemCount'

const ItemCountContainer = ({stock}) => {
  const [stockTotal, setStockTotal] = useState(stock)
  const [unitsToBuy, setUnitsToBuy] = useState(1)
  const [status, setStatus] = useState()

  const sum = () => {
    if(stockTotal > 0) {
      setUnitsToBuy(unitsToBuy + 1)
      setStockTotal(stockTotal - 1)
    } 
  }

  const subtract = () => {
    if (unitsToBuy > 1) {
      setUnitsToBuy(unitsToBuy - 1)
      setStockTotal(stockTotal + 1)
    } 
  }

  const onAdd = () => {
    alert(`Has agregado ${unitsToBuy} unidades al carrito`)
  }

  useEffect(() => {
    stockTotal === 0 ?
      setStatus(`Solo quedan ${unitsToBuy} unidades en stock`)
      :
      setStatus('')
  }, [stockTotal])

  return (
    <>
      <ItemCount stockTotal={stockTotal} unitsToBuy={unitsToBuy} sum={sum} subtract={subtract} onAdd={onAdd} status={status}/>
    </>
  )
}

export default ItemCountContainer