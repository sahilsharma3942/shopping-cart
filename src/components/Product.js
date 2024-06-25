import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Cart } from '../Context/Context';

const Product = ({ product }) => {
  const {setCart , cart} = useContext(Cart);
  
  const addToCart = ()=>{
    setCart([...cart,product]);
  }
  const removeFromCart = ()=>{
    setCart(cart.filter((p)=>(p.id !== product.id)));
  }  

  return(
    <div className='product'>
      <img src={product.image} alt={product.title} />
      <h3 className='product-title'>{product.title}</h3>
      <p>${product.price}</p>
      <Link to={`/product/${product.id}`}>View Details</Link>
      {cart.some(item => item.id === product.id) ? (
        <button onClick={removeFromCart}>Remove From Cart</button>
      ) : (
        <button onClick={addToCart}>Add to Cart</button>
      )}
    </div>
  )
}

export default Product;
