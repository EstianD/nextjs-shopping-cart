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

  const [state, dispatch] = useReducer(reducers, initialState);
  const { cart } = state;

  useEffect(() => {
    // Get cart data
  }, []);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
