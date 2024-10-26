import './style.css';
import PropTypes from 'prop-types';
import { CartContext } from '../CartContext';
import { useContext } from 'react';

const SingleProduct = ({ prod }) => {
  const { cart, setCart } = useContext(CartContext);

  return (
    <>
      <div className="products">
        <img src={prod.image} alt={prod.name} />
        <div className="productDesc">
            <span style={{fontWeight: 700}}>{prod.name}</span>
            <span>{prod.price.substring(0, 3)}</span>
        </div>
        {cart.includes(prod)?
        (<button className="remove" onClick={() => {setCart(cart.filter((c) => c.id !== prod.id))}}>Remove from Cart</button>):
        (<button className="add" onClick={() => {setCart([...cart, prod])}}>Add to Cart</button>)}
      </div>
    </>
  )
}

SingleProduct.propTypes = {
  prod: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
};

export default SingleProduct
