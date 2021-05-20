import { ACTIONS } from "./Actions";

const reducers = (state, action) => {
  console.log("REDUCER: ", state);
  console.log("ACTION: ", action.payload);

  switch (action.type) {
    case ACTIONS.GET_CART:
      return {
        ...state,
        cart: [...action.payload.cart],
      };
    case ACTIONS.ADD_CART:
      console.log("REDUCER: ", action);
      return {
        ...state,
        cart: [...action.payload],
      };
    case ACTIONS.INCREMENT_ITEM:
      console.log("INCREMENT: ", action);
      return { ...state, cart: [...action.payload] };
    case ACTIONS.DECREMENT_ITEM:
      console.log("DECREMENT: ", action);
      return { ...state, cart: [...action.payload] };
    case ACTIONS.REMOVE_ITEM:
      console.log("REMOVE", action);
      return { ...state, cart: [...action.payload] };

    default:
      return state;
  }
};

export default reducers;
