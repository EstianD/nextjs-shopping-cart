import { ACTIONS } from "./Actions";

const reducers = (state, action) => {
  switch (action.type) {
    case ADD_CART:
      return {
        ...state,
        cart: action.payload,
      };
    default:
      return state;
  }
};

export default reducers;
