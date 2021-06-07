import React, { useState , useEffect} from 'react';
import ItemCount from '../components/Items/ItemCount';
import '../css/ItemCount.css';
import { useShoppingCart } from '../context/cartContext';
import { Link } from 'react-router-dom';

const ItemCountContainer = ({ Item, inDetail }) => {

  const { addItem, isInCart } = useShoppingCart(); 
  const [unitsToBuy, setUnitsToBuy] = useState(1);
  const [stockTotal, setStockTotal] = useState(Item.stock - unitsToBuy);
  const [status, setStatus] = useState();

  const sum = () => {
    if (stockTotal > 0) {
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
      unitsToBuy === 1 ?
        setStatus(`Solo queda ${unitsToBuy} unidad en stock`)
        :  
        setStatus(`Solo quedan ${unitsToBuy} unidades en stock`)
      :
      setStatus('')
  }, [stockTotal, unitsToBuy]);

  return (
    <>
    { Item.stock === 0 ?
    <>
      <p className="out-stock">SIN STOCK</p>
    </>
    :
    <>
      { isInCart (Item.id) ?
        inDetail ?
          <>
            <div className="product-added">
              <p>Producto agregado <br/><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style={{fill:"currentColor"}} className="bi bi-check-square" viewBox="0 0 16 16">
              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
              <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z"/>
              </svg></p>
            </div>
            <Link to={`/carrito`}><button className="btn">Finalizar Compra</button></Link> 
          </>
          : 
          <div className="product-added">
            <p>Producto agregado <br/><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style={{fill:"currentColor"}} className="bi bi-check-square" viewBox="0 0 16 16">
              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
              <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z"/>
            </svg></p>
          </div>    
      : 
        <ItemCount
          stockTotal={stockTotal}
          unitsToBuy={unitsToBuy}
          sum={sum}
          subtract={subtract}
          status={status}
          onAdd={onAdd}
        />
      }
    </>
    }
    </>
  )
}

export default ItemCountContainer;
