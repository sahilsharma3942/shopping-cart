import React, { createContext, useState, useEffect } from 'react'
import { fetchProducts } from '../api/api';



export const Cart = createContext();

const Context = ({children}) => {
const [cart , setCart] = useState([]);
const [products, setProducts] = useState([]);

useEffect(() => {
  const getProducts = async () => {
    const products = await fetchProducts();
    console.log(products);
    setProducts(products);
  };
  getProducts();
}, []);
    
  return (
    <Cart.Provider value={{cart , setCart, products }}>
        {children}
    </Cart.Provider>
  )
}

export default Context;