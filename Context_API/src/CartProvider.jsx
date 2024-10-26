import { useState } from 'react';
import { CartContext } from './CartContext';
import PropTypes from 'prop-types';

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <>
      <CartContext.Provider value={{ cart, setCart }}>
        {children}
      </CartContext.Provider>
    </>
  )
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartProvider
