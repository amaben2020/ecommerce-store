import CartActionKind from "./types";

const { ADD_TO_CART } = CartActionKind;

type AddToCart = {
  readonly type: "ADD_TO_CART";
  readonly payload: ProductProps;
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

type Actions = AddToCart | DELETE | UPDATE | RESET;

type State = {
  cart: ProductProps[];
};

const cartReducer = (state: State, action: Actions): State => {
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

export default cartReducer;
