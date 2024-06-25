import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../api/api';
import { Cart } from '../Context/Context';


const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { setCart, cart } = useContext(Cart);

  // Fetch a single product using id
  useEffect(() => {
    const getProduct = async () => {
      const product = await fetchProductById(id);
      setProduct(product);
    };
    getProduct();
  }, [id]);

  const addToCart = () => {
    setCart([...cart, product]);
  };

  const removeFromCart = () => {
    setCart(cart.filter((p) => p.id !== product.id));
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} />
      <h1>{product.title}</h1>
      <p className="description">{product.description}</p>
      <p className="price">${product.price}</p>
      {cart.some((item) => item.id === product.id) ? (
        <button onClick={removeFromCart}>Remove From Cart</button>
      ) : (
        <button onClick={addToCart}>Add to Cart</button>
      )}
    </div>
  );
};

export default ProductDetails;
