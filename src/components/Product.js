import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';

function Product({ id, title, image, price, rating }) {
  const { dispatch } = useContext(ProductContext);

  const addToBasket = () => {
    // Dispatch the item into the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />

      <button onClick={addToBasket} className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded">
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
