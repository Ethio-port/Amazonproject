import React from "react";
import Rating from "@mui/material/Rating";

import classes from ".//Product.module.css";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";



function ProductCard({ product, flex, render_desc, }) {
  const { id, image, title, rating, price, description } = product;
 

 

  return (
    <div className={classes.Card_container}>
      <a href="">
        <img src={image} alt="image" />
      </a>
      <div>
        <h3>{title}</h3>
        {render_desc && <div className={classes.Card_description}>{description}</div>}
        <div className="Card_rating">
          {/* rating */}
          <Rating value={rating?.rate} precision={0.1} />

          {/* rating counter */}
          <small>{rating?.count}</small>
        </div>
        <div>
          {/* price */}

          <CurrencyFormat amount={price} />
        </div>
        
          <button className={classes.button} >
            add to cart
          </button>
      
      </div>
    </div>
  );
}

export default ProductCard;