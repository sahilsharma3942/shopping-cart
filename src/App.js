import { BrowserRouter as Router , Route, Routes  } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Homepage';
import ProductDetails from './components/ProductDetails';
import Header from './components/Header';
import CartPage from './pages/CartPage';

function App() {
  return (
    //setup react router for navigation
    <Router>    
      <Header></Header>
      {/* define the routes for the app */}
      <Routes>
        <Route path="/" Component={HomePage}/>
        <Route path="/product/:id" Component={ProductDetails}/>
        <Route path='/cart' Component={CartPage}/>
      </Routes>
    </Router>
  );
}

export default App;
