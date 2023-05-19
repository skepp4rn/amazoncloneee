import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';

function Basket() {
  const { state } = useContext(ProductContext);
  const { basket } = state;

  return (
    <div>
      <h2>Your Shopping Basket</h2>

      {basket.map((item, i) => (
        <div key={i} className="basketItem">
          <img src={item.image} alt="" className="basketItem__image" />
          <div className="basketItem__info">
            <p className="basketItem__title">{item.title}</p>
            <p className="basketItem__price">
              <small>$</small>
              <strong>{item.price}</strong>
            </p>
            <div className="basketItem__rating">
              {Array(item.rating)
                .fill()
                .map((_, i) => (
                  <p key={i}>⭐</p>
                ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Basket;
