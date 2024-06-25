import React, { useContext } from 'react';
import Product from './Product';
import { Cart } from '../Context/Context';

const ProductList = () => {
  
const {products} = useContext(Cart);
  return (
    <div className="product-list">
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
