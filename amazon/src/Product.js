import React from "react";
import "./Product.css";

const Product = ({title , image , price , rating}) => {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
        {Array.from({ length: rating }).map((_, i) => (
            <p key={i}>🌟</p>
          ))}
          
          <img src={image} />
        </div>
        <button className="product__button">Add to basket</button>
      </div>
    </div>
  );
};

export default Product;
