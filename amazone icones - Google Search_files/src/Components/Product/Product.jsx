import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

import classes from "./Product.module.css";


function Product() {
  const [products, setProducts] = useState();
  

  useEffect(() => {
    axios .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        // console.log(res);
       
      })
      .catch((err) => {
        console.log(err);
       
      });
  }, []);

  return (
    <>
     
        <div className={classes.product_container}>
          {products?.map((singleProduct) => {
            return (
              <ProductCard
                product={singleProduct}
                key={singleProduct.id}

              />
            );
          })}
        </div>
    
    </>
  );
}

export default Product;
