import React, { useState , useEffect} from 'react'
import ItemCount from '../components/Items/ItemCount'
import { useShoppingCart } from '../context/cartContext'
import { Link } from 'react-router-dom'


const ItemCountContainer = ({Item, added, setAdded = () => {}}) => {
  const [stockTotal, setStockTotal] = useState(Item.stock)
  const [unitsToBuy, setUnitsToBuy] = useState(1)
  const [status, setStatus] = useState()
  const { addItem } = useShoppingCart(); 

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
    addItem(Item, unitsToBuy)
    setAdded(true)
  }

  useEffect(() => {
    stockTotal === 0 ?
      setStatus(`Solo quedan ${unitsToBuy} unidades en stock`)
      :
      setStatus('')
  }, [stockTotal, unitsToBuy])

  return (
    <>
      { added ? <Link to={`/carrito`}><button>Finalizar Compra</button></Link> : <ItemCount stockTotal={stockTotal} unitsToBuy={unitsToBuy} sum={sum} subtract={subtract} status={status} onAdd={onAdd}/> }
    </>
  )
}

export default ItemCountContainer
