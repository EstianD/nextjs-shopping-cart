export const ACTIONS = {
  ADD_CART: "ADD_CART",
  GET_CART: "GET_CART",
};

export const addToCart = (product, cart) => {
  // Create copy of cart array
  let newCart = [...cart];
  console.log("cart ID:", product.id);
  console.log("CART: ", cart);
  // Add new product to cart array
  newCart.push({ ...product, quantity: 1 });
  // Set item in localstorage
  localStorage.setItem("shopping-cart", JSON.stringify(newCart));
  // Return action and new cart
  return {
    type: ACTIONS.ADD_CART,
    payload: [...newCart],
  };
};
