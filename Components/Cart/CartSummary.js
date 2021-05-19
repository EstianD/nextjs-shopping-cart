import React from "react";
import styles from "../../styles/Cart.module.css";

function CartSummary({ cart }) {
  console.log("CART STATE: ", cart);

  const renderCartSummary = () => {
    let cartTotal = 0;

    let rows = cart.map((item) => {
      let itemTotal = 0;
      itemTotal = item.price * item.quantity;
      cartTotal += itemTotal;
      return (
        <tr>
          <td>{item.title}</td>
          <td>{item.quantity}</td>
          <td>R{item.price}</td>
          <td>R{itemTotal}</td>
        </tr>
      );
    });
    return (
      <table className={styles.cartSummaryTable}>
        <tr>
          <th>Product</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Total</th>
        </tr>
        {rows}
        <tfoot>
          <td></td>
          <td></td>
          <td></td>
          <td>R{cartTotal}</td>
        </tfoot>
      </table>
    );
  };

  return (
    <div>
      Summary
      {renderCartSummary()}
    </div>
  );
}

export default CartSummary;
