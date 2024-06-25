import React, { useContext, useEffect, useState } from 'react';
import { Cart } from '../Context/Context';
import CartItem from '../components/CartItem';


const CartPage = () => {


  // Use the Cart context to get the cart state and setCart function
  const { cart } = useContext(Cart);
  const [total , setTotal] = useState();

  //calculate and display the total
  useEffect(()=>{
    const sum = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    setTotal(sum.toFixed(2));
  },[cart]);

  return (
    <div className="cart-page">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-items">
            {cart.map(item => (
              <CartItem item={item}/>
            ))}
          </ul>
          <div className="total-section">
            <h3>Total Price: ${total}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
