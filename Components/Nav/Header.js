import React, { useContext } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Nav.module.css";
import { DataContext } from "../../store/GlobalState";

const Header = () => {
  const { state } = useContext(DataContext);
  // const { cart } = state.cart;
  console.log("HEADER STATE: ", state);
  console.log("CART STATE: ", state.cart);

  const cartValue = state.cart ? state.cart.length : 0;

  const router = useRouter();
  return (
    <div className={styles.navContainer}>
      <div
        className={styles.navLink}
        onClick={() => router.push("/", undefined, { shallow: true })}
      >
        Products
      </div>
      <div
        className={styles.navLink}
        onClick={() => router.push("/cart", undefined, { shallow: true })}
      >
        Cart ({cartValue})
      </div>
    </div>
  );
};

export default Header;
