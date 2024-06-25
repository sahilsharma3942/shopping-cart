import React, { useContext, useEffect } from 'react';
import { Cart } from '../Context/Context';


const CartItem = ({item}) => {

const {cart , setCart} = useContext(Cart);


//Api response doesn't give quantity of products
//So on render we add default quantity as 1
  useEffect(()=>{
    const updatedCart = cart.map(item => {
      if(!item.quantity){
        return { ...item, quantity: 1 };
      }
      return item;
    });
    setCart(updatedCart);
  },[]);

// Function to handle removing an item from the cart
// Filter out the item with the given productId from the cart and update the cart
const handleRemoveItem = (productId) => {
const updatedCart = cart.filter(item => item.id !== productId);
setCart(updatedCart);
};


//Fucntion to chnage quantity
  const handleQuantityChange = (productId, newQuantity) => {
    const updatedCart = cart.map(item => {
      if (item.id === productId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCart(updatedCart);
  };


  return (
    <div>
        <li key={item.id} className="cart-item">
                <div className="item-info">
                  <img src={item.image} alt={item.title} className="item-image" />
                  <div>
                    <h3>{item.title}</h3>
                    <p>Price: ${item.price}</p>
                    <p>Quantity: {console.log("sasa",item.quantity)}</p>
                    <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                        min="1"
                        className="quantity-input"
                    />
                    <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                  </div>
                </div>
              </li>
    </div>
  )
}

export default CartItem