// Home.js

import React from 'react';
import page1 from './page1'
import page2 from './page2'


const home = () => {
  return (
    <div>
      <h1>Welcome to Our App!</h1>
      <nav>
        <ul>
          <li>
            {/* <a href="/products">All Products</a> */}
            <page1/>
          </li>
          <li>
            {/* <a href="/product-detail">Product Detail</a> */}
            <page2/>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default home;
