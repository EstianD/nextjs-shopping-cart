import React from "react";
import styles from "../../styles/Cart.module.css";
import { useRouter } from "next/router";

function CheckoutButton({ cart }) {
  if (cart.length !== 0) {
    return (
      <div>
        <button
          onClick={() => router.push("/checkout")}
          className={styles.checkoutBtn}
        >
          Checkout
        </button>
      </div>
    );
  }
  return <></>;
}

export default CheckoutButton;
