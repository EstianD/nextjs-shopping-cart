import React from "react";
import styles from "../../styles/Cart.module.css";

function CartItem({ item }) {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.itemImage}>
        <img src={item.img} />
      </div>
      <div className={styles.itemTitleBox}>
        <span className={styles.itemTitle}>{item.title}</span>
        <br />
        <span className={styles.itemBrand}>{item.brand}</span>
      </div>
      <div className={styles.itemsQuantityContainer}>
        <button className="">-</button>
        <label>{item.quantity}</label>
        <button className="">+</button>
      </div>
      <div className={styles.itemPrice}>R {item.price}</div>
    </div>
  );
}

export default CartItem;
