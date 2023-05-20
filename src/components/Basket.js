import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';

function Basket() {
  const { state, dispatch } = useContext(ProductContext);
  const { basket } = state;

  const handleRemove = (id) => {
    dispatch({ type: 'REMOVE_FROM_BASKET', id: id });
  };

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
            <button onClick={() => handleRemove(item.id)}>Remove from basket</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Basket;
