import React from "react";
import styles from "../../styles/Products.module.css";
import { useRouter } from "next/router";

export const Product = ({ product }) => {
  console.log("PRODUCT: ", product);

  const router = useRouter();

  return (
    <div
      className={styles.productContainer}
      onClick={() => router.push(`/product/${product.id}`)}
    >
      <h4>{product.title}</h4>
      <div>
        <img className={styles.thumbnail} src={product.img} />
      </div>
      <h5>R {product.price}</h5>
      <button>Add to cart</button>
    </div>
  );
};
