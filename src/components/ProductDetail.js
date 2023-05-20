import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css'; // Create this file next

function ProductDetail() {
  const { id } = useParams(); // This will give us the product ID from the URL

  // Fetch the product details from your product list using the ID
  // For now, we'll just display the product ID
  return (
    <div className="productDetail">
      <h2>Product Detail Page</h2>
      <p>Product ID: {id}</p>
    </div>
  );
}

export default ProductDetail;
