import { ADD_TO_CART } from "./types";

type ADD = {
  readonly type: "ADD_TO_CART";
  readonly payload: object;
};
type DELETE = {
  readonly type: "DELETE_FROM_CART";
  readonly payload: number;
};

type UPDATE = {
  readonly type: "UPDATE _CART";
  readonly payload: number;
};

type RESET = {
  readonly type: "RESET_CART";
  readonly payload: number;
};

type Actions = ADD | DELETE | UPDATE | RESET;

type State = {
  cart: Array<any>;
};

const initialState = {
  cart: [],
};

const productReducer = (state: State, action: Actions): State => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, payload],
      };
    default:
      throw new Error("Action type not found");
  }
};
