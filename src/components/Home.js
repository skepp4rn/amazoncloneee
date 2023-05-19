import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  const products = [
    {
      id: 1,
      title: "Product 1",
      image: "https://via.placeholder.com/150",
      price: 29.99,
      rating: 5,
    },
    {
      id: 2,
      title: "Product 2",
      image: "https://via.placeholder.com/150",
      price: 39.99,
      rating: 4,
    },
    // Add more products as needed
  ];

  return (
    <div className="home">
      <div className="home__container">
        {products.map(product => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            rating={product.rating}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
