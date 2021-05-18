import React, { useContext } from "react";
import styles from "../../styles/Products.module.css";
import { useRouter } from "next/router";
import { DataContext } from "../../store/GlobalState";
import { AddToCartBtn } from "./AddToCartBtn";

export const Product = ({ product, handleProductClick }) => {
  // console.log("PRODUCT: ", product);
  const { state } = useContext(DataContext);
  // console.log("PRODUCT STATE: ", state);

  // let addToCartBtn = () => {
  //   const res = state.cart.filter((item) => {
  //     return item.id === product.id;
  //   });
  //   console.log("BUTTON RESULT: ", res);
  //   if (res.length) return "In cart";
  //   return <button id="add_btn">Add to cart</button>;
  // };

  return (
    <div
      className={styles.productContainer}
      onClick={(e) => handleProductClick(product, e)}
    >
      <h4>{product.title}</h4>
      <div>
        <img className={styles.thumbnail} src={product.img} />
      </div>
      <h5>R {product.price}</h5>
      <AddToCartBtn state={state} product={product} />
    </div>
  );
};
