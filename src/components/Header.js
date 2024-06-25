import { Link } from 'react-router-dom';
import CartDropDown from './CartDropDown';

const Header = () => {


  return (
    <header className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="brand-link">E-Commerce Website</Link>
      </div>
      <CartDropDown></CartDropDown>
    </header>
  );
};

export default Header;
