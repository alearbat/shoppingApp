import React, { useState , useEffect} from 'react';
import ItemCount from '../components/Items/ItemCount';
import { useShoppingCart } from '../context/cartContext';


const ItemCountCartContainer = ({ Item, hideButton }) => {

  const [stockTotal, setStockTotal] = useState(Item.stock);
  const [unitsToBuy, setUnitsToBuy] = useState(Item.qty);
  const [status, setStatus] = useState();
  const { addItem } = useShoppingCart(); 

  const sum = () => {
    if(stockTotal - unitsToBuy > 0) {
      setUnitsToBuy(unitsToBuy + 1);
      setStockTotal(stockTotal - 1);
    } 
  }

  const subtract = () => {
    if (unitsToBuy > 1) {
      setUnitsToBuy(unitsToBuy - 1);
      setStockTotal(stockTotal + 1);
    } 
  }

  const onAdd = () => {
    addItem(Item, unitsToBuy);
  }

  useEffect(() => {
    stockTotal === 0 ?
      setStatus(`Solo quedan ${unitsToBuy} unidades en stock`)
      :
      setStatus('')
  }, [stockTotal, unitsToBuy])

  return (
    <>
      <ItemCount
        stockTotal={stockTotal}
        unitsToBuy={unitsToBuy}
        sum={sum}
        subtract={subtract}
        status={status}
        hideButton={hideButton}
        />
    </>
  )
}

export default ItemCountCartContainer;