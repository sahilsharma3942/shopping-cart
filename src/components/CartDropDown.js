import { useContext , useState} from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Cart } from '../Context/Context';
import { Link } from 'react-router-dom';

const CartDropDown = () => {

  const { cart } = useContext(Cart);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };


  return (
    <div className="navbar-cart">
        <div className="cart-dropdown" onClick={toggleCart}>
          <FaShoppingCart className="cart-icon" />
          <span className="cart-count">{cart.length}</span>
          <div className={`cart-content ${isCartOpen ? 'show' : ''}`}>
            <Link to={"/cart"} className='link'>View Cart</Link>
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <ul>
                {cart.map((item) => (
                  <li key={item.id}>
                    <img src={item.image} alt={item.title} />
                    <div>
                      <p>{item.title}</p>
                      <p>${item.price}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
  )
}

export default CartDropDown