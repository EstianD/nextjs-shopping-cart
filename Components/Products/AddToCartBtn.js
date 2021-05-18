import React from "react";

export const AddToCartBtn = ({ state, product }) => {
  let addToCartBtn = () => {
    const res = state.cart.filter((item) => {
      return item.id === product.id;
    });
    console.log("BUTTON RESULT: ", res);
    if (res.length) return "In cart";
    return <button id="add_btn">Add to cart</button>;
  };

  return <div>{addToCartBtn()}</div>;
};
