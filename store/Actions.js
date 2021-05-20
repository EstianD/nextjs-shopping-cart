export const ACTIONS = {
  ADD_CART: "ADD_CART",
  GET_CART: "GET_CART",
  INCREMENT_ITEM: "INCREMENT_ITEM",
  DECREMENT_ITEM: "DECREMENT_ITEM",
  REMOVE_ITEM: "REMOVE_ITEM",
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

export const incrementItem = (id, cart) => {
  console.log("ID: ", id);
  console.log("CART: ", cart);
  // Create copy of cart state array
  let newCart = [...cart];

  // Get cart item
  let cartIndex = newCart.findIndex((item) => item.id === id);

  // Increment cart item quantity
  newCart[cartIndex].quantity++;
  // Store new cart in localStorage
  localStorage.setItem("shopping-cart", JSON.stringify(newCart));
  // Return a abject with the type and new cart
  return {
    type: ACTIONS.INCREMENT_ITEM,
    payload: [...newCart],
  };
};

export const decrementItem = (id, cart) => {
  // Create copy of cart state array
  let newCart = [...cart];
  // Get cart item
  let cartIndex = newCart.findIndex((item) => item.id === id);

  // Decrement cart item quantity
  newCart[cartIndex].quantity--;

  // Save cart to localstorage
  localStorage.setItem("shopping-cart", JSON.stringify(newCart));

  // Return new object with type decrement and
  return {
    type: ACTIONS.DECREMENT_ITEM,
    payload: [...newCart],
  };
};

export const removeItem = (id, cart) => {
  console.log("ID: ", id);
  let newCart = [...cart];
  // Remove item from cart
  const updatedCart = newCart.filter((item) => item.id !== id);

  // Save cart to localstorage
  localStorage.setItem("shopping-cart", JSON.stringify(updatedCart));

  return {
    type: ACTIONS.REMOVE_ITEM,
    payload: [...updatedCart],
  };
  console.log(updatedCart);
};
