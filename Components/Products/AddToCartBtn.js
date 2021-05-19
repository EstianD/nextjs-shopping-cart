import React from "react";
import styles from "../../styles/Product.module.css";

export const AddToCartBtn = ({ state, product }) => {
  let addToCartBtn = () => {
    const res = state.cart.filter((item) => {
      return item.id === product.id;
    });

    if (res.length)
      return <span className={styles.productAddedText}>In cart</span>;
    return (
      <button id="add_btn" className={styles.productAddToCartBtn}>
        Add to cart
      </button>
    );
  };

  return <div>{addToCartBtn()}</div>;
};
