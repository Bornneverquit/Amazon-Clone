import React from "react";
import "./CheckoutProduct.css";

const CheckoutProduct = ({ id, image, title, price, rating }) => {
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array.from({ length: rating }).map((_, i) => (
            <p key={i}>🌟</p>
          ))}
        </div>
        <button></button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
