import React from "react";
import "./Product.css";

const Product = () => {
  return (
    <div className="product">
      <div className="product__info">
        <p>the lean startup</p>
        <p className="product__price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className="product__rating">
          <p>🌟</p>
          <p>🌟</p>
          <p>🌟</p>
          <img src="https://ecx.images-amazon.com/images/I/51tD0SDNMeL.SX166.jpg" />
        </div>
        <button>Add to basket</button>
      </div>
    </div>
  );
};

export default Product;
