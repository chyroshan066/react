import SingleProduct from "./SingleProduct";
import { useEffect, useState, useContext } from "react";
import { CartContext } from '../CartContext';

const CartPage = () => {
  const [total, setTotal] = useState(0);

  const { cart } = useContext(CartContext);

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price.substring(0, 3)), 0))
  }, [cart]);

  return (
    <>
      <span style={{fontSize: 30}}>My Cart</span>
      <br />
      <span style={{fontSize: 30}}>Total: Rs.{total}</span>
      <div className="productContainer">
      {cart.map((prod) => (
            <SingleProduct key={prod.id} prod={prod}/>
        ))}
      </div>
    </>
  )
}

export default CartPage
