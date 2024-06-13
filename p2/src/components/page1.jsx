import React, { useState, useEffect } from 'react';

const page1 = () => {
  const [products, setProducts] = useState([]);

  // Fetch product data from the API (replace with your actual API endpoint)
  useEffect(() => {
    fetch('http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div>
      <h1>All Laptops</h1>
      {products.map((product) => (
        <div key={product.id}>
          <p>Name: {product.name}</p>
          <p>Price: ${product.price}</p>
          {/* Other product details */}
        </div>
      ))}
    </div>
  );
};

export default page1;