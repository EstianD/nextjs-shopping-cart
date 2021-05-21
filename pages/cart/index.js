import React, { useContext } from "react";
import { DataContext } from "../../store/GlobalState";
import { useRouter } from "next/router";

import styles from "../../styles/Cart.module.css";
import CartItem from "../../Components/Cart/CartItem";
import CartSummary from "../../Components/Cart/CartSummary";
import CheckoutButton from "../../Components/Cart/CheckoutButton";
import { incrementItem, decrementItem, removeItem } from "../../store/Actions";

function index() {
  const { state, dispatch } = useContext(DataContext);
  const router = useRouter();

  const { cart } = state;
  console.log("CART: ", cart);

  // Handle Cart item increment
  const handleCartItemIncrement = (id) => {
    console.log("INCREMENT: ", id);
    dispatch(incrementItem(id, cart));
  };

  // Handle Cart item decrement
  const handleCartItemDecrement = (id) => {
    console.log("DECREMENT: ", id);
    dispatch(decrementItem(id, cart));
  };

  // Handle the removal of a item
  const handleCartItemRemove = (id) => {
    console.log("REMOVE", id);

    if (dispatch(removeItem(id, cart))) {
      return true;
    }
  };

  const renderCartItems = cart.map((item) => (
    <CartItem
      key={item.id}
      item={item}
      handleCartItemIncrement={handleCartItemIncrement}
      handleCartItemDecrement={handleCartItemDecrement}
      handleCartItemRemove={handleCartItemRemove}
    />
  ));

  return (
    <div>
      {cart.length === 0 && (
        <div className={styles.emptyCartText}>Cart is empty</div>
      )}
      <div className={styles.cartContainer}>
        <div className={styles.cartProductsContainer}>{renderCartItems}</div>
        <div className={styles.cartSummaryContainer}>
          <CartSummary cart={cart} />
          <CheckoutButton cart={cart} />
        </div>
      </div>
    </div>
  );
}

export default index;
