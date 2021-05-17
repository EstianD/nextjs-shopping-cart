import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Nav.module.css";

const Header = () => {
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
        Cart
      </div>
    </div>
  );
};

export default Header;
