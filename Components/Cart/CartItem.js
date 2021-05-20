import React from "react";
import styles from "../../styles/Cart.module.css";
import RemoveCartItem from "./RemoveCartItem";

function CartItem({
  item,
  handleCartItemIncrement,
  handleCartItemDecrement,
  handleCartItemRemove,
}) {
  // const renderIncrementBtn =

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
        {item.quantity > 1 && (
          <button onClick={() => handleCartItemDecrement(item.id)} className="">
            -
          </button>
        )}
        <label>{item.quantity}</label>
        <button className="" onClick={() => handleCartItemIncrement(item.id)}>
          +
        </button>
      </div>
      <div className={styles.itemPrice}>R {item.price}</div>
      <div className={styles.removeItem}>
        <RemoveCartItem
          handleCartItemRemove={handleCartItemRemove}
          item={item}
        />
      </div>
    </div>
  );
}

export default CartItem;
