import React, { useContext } from "react";
import { DataContext } from "../../store/GlobalState";

function index() {
  const { state, dispatch } = useContext(DataContext);

  return (
    <div>
      <h3>cart</h3>
      <pre>{JSON.stringify(state.cart, undefined, 4)}</pre>
    </div>
  );
}

export default index;
