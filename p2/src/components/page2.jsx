import React from 'react';
import { useParams } from 'react-router-dom';

const page2 = () => {
  const { productId } = useParams(); // Get the product ID from the route

  // Fetch product details based on the product ID (replace with actual API call)

  return (
    <div>
      <h1>Product Details</h1>
      <p>Product ID: {productId}</p>
      {/* Display other product details */}
    </div>
  );
};

export default page2;