import { faker } from '@faker-js/faker';
import { useState } from 'react';
import SingleProduct from './SingleProduct';
import './style.css'

faker.seed(150);  //To generate same data

const Home = () => {
  //While returning objects through map, we need to enclose it inside parenthesis
  const productsArray = [...Array(20)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.url(),
  }));

  const [products] = useState(productsArray);

  return (
    <>
      <div className="productContainer">
        {/* While working in react.js, when using map for returning instead of using curly braces{} always use parenthesis() */}
        {/* Also while mapping in react, each item must have unique key which is required by react to track elements list effectively */}
        {products.map((prod) => (
            <SingleProduct key={prod.id} prod={prod}/>
        ))}
      </div>
    </>
  )
}

export default Home
