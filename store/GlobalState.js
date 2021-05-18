import { createContext, useReducer, useEffect } from "react";
import reducers from "./Reducers";
// Import products
import { ProductList } from "../ProductList";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const initialState = {
    products: [...ProductList],
    cart: [],
  };
  //   let cartArray = [];

  const [state, dispatch] = useReducer(reducers, initialState);
  const { cart } = state;

  useEffect(() => {
    // Get cart data
    console.log("GLOBAL STATE EFFECT");
    //  console.log("STORAGE 1: ", cartArray);
    const cartRes = JSON.parse(localStorage.getItem("shopping-cart"));
    if (cartRes) {
      dispatch({ type: "GET_CART", payload: { cart: cartRes } });
    } else {
      dispatch({ type: "GET_CART", payload: { cart: [] } });
    }
  }, []);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
