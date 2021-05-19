import React, { useContext } from "react";
import { DataContext } from "../../store/GlobalState";
import styles from "../../styles/Cart.module.css";
import CartItem from "../../Components/Cart/CartItem";
import CartSummary from "../../Components/Cart/CartSummary";

function index() {
  const { state, dispatch } = useContext(DataContext);

  const { cart } = state;
  console.log("CART: ", cart);

  const renderCartItems = cart.map((item) => (
    <CartItem key={item.id} item={item} />
  ));

  return (
    <div>
      <h3>cart</h3>

      <div className={styles.cartContainer}>
        <div className={styles.cartProductsContainer}>{renderCartItems}</div>
        <div className={styles.cartSummaryContainer}>
          <CartSummary cart={cart} />
        </div>
      </div>
    </div>
  );
}

export default index;
