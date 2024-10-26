import { Link } from "react-router-dom"
import './style.css';
import { CartContext } from '../CartContext';
import { useContext } from 'react';

const Header = () => {
  const { cart } = useContext(CartContext);

  return (
    <>
      <span className="header">React Context API</span>
      <ul className="nav">
        <li className="prod">
          <Link to="/">Home</Link>
        </li>
        <li className="prod">
          <Link to="/cart">Cart {cart.length}</Link>
        </li>
      </ul>
    </>
  )
}

export default Header
