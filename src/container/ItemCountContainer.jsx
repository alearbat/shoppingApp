import React, { useState , useEffect} from 'react'
import ItemCount from '../components/Items/ItemCount'
import { useShoppingCart } from '../context/cartContext'
import { Link } from 'react-router-dom'

// checkCart returns how many units this item has in cart
function checkCart (cartItems =[], id) {
  const inCart = cartItems.find(x => x.id === id)
    if (inCart !== undefined) {
      return inCart.qty 
    }
    return 0
}

const ItemCountContainer = ({ Item, added, setAdded = () => {}, hideButton, inDetail }) => {

  const { cartItems, addItem } = useShoppingCart(); 
  const unitsAlreadyAdded = checkCart(cartItems, Item.id)
  const [unitsToBuy, setUnitsToBuy] = useState(1)
  const [stockTotal, setStockTotal] = useState(Item.stock - unitsToBuy)
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
      {inDetail ?
        added ? 
          <Link to={`/carrito`}><button className="btn">Finalizar Compra</button></Link> 
          : 
          <ItemCount
            stockTotal={stockTotal}
            unitsToBuy={unitsToBuy}
            sum={sum}
            subtract={subtract}
            status={status}
            onAdd={onAdd}
            hideButton={hideButton}
          />
        :
        added ? 
          <p>Producto agregado</p> 
          : 
          <ItemCount
            stockTotal={stockTotal}
            unitsToBuy={unitsToBuy}
            sum={sum}
            subtract={subtract}
            status={status}
            onAdd={onAdd}
            hideButton={hideButton}
          />
      }
    </>
  )
}

export default ItemCountContainer
