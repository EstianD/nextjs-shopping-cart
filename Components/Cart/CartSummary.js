import React from "react";
import styles from "../../styles/Cart.module.css";

function CartSummary({ cart }) {
  console.log("CART STATE: ", cart);

  const renderCartSummary = () => {
    let cartTotal = 0;

    let rows = cart.map((item, i) => {
      let itemTotal = 0;
      itemTotal = item.price * item.quantity;
      cartTotal += itemTotal;
      return (
        <tr key={i}>
          <td>{item.title}</td>
          <td>{item.quantity}</td>
          <td>R{item.price}</td>
          <td>R{itemTotal}</td>
        </tr>
      );
    });

    if (cart.length !== 0) {
      return (
        <table className={styles.cartSummaryTable}>
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
          <tfoot>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td className={styles.cartTotalCell}>
                <b>R{cartTotal}</b>
              </td>
            </tr>
          </tfoot>
        </table>
      );
    }
  };

  return (
    <div>
      {renderCartSummary()}
      {/* <button></button> */}
    </div>
  );
}

export default CartSummary;
