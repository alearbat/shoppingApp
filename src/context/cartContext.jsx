import React, { useState } from 'react'

export const CartContext = React.createContext([]);

export const ShoppingCart = ({children}) => {

  const [cartItems, setCartItems] = useState([])

  // check if the item is in cart
  const isInCart = (id) => {
    const inCart = cartItems.find(x => x.id === id)
    if (inCart !== undefined) {
      return true
    }
    return false
  }

  // Add more quant to an existing item
  const addQuant = (item, quant) => {
    // filter cartItems until you find the same item
    const filter = [...cartItems]
    filter.forEach (i => {
      if(i.id === item.id) {
        // when you find the item, add new quant
        i.qty = i.qty + quant
      }
    })
    // set useState w/ new quant.
    setCartItems(filter)
  }

  const addItem = (item, quant) => {
    // if the item exists, add quant
    if (isInCart(item.id)) {
      addQuant(item, quant)
      console.log(item)
    // if the item doesn't exist, add item and quant to cart
    } else {
      setCartItems([...cartItems, {...item, qty: quant}])
    }
  }
  console.log(cartItems)

  const removeItems = (item) => {
    console.log(item)
    const newItem = cartItems.filter(x=> x.id !== item)
    setCartItems(newItem)
    console.log('Item eliminado')
  }

  // Clear all items in cart
  const clearItems = () => setCartItems([])

  return (
    <CartContext.Provider value={{ cartItems, clearItems, addItem, removeItems }}>
      {children}
    </CartContext.Provider>
  )
}

export const useShoppingCart = () => {
  return React.useContext(CartContext)
}

// en el contexto tengo que almacenar cuantos items tengo elegidos y esa info la consumo desde el item y desde el item detail