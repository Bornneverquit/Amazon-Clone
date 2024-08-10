import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

const Product = ({id ,title , image , price , rating}) => {
   const [{ basket } , dispatch ] = useStateValue();

   console.log("this is basket",basket)

  const addToBasket = () => {
    // dispatch the item into data layer
     dispatch({
       type: 'ADD_TO_BASKET',
       item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
       }
     });
  }

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
        <button onClick={addToBasket} className="product__button">Add to basket</button>
      </div>
    </div>
  );
};

export default Product;
