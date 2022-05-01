import CartActionKind from "./types";

const { ADD_TO_CART, DELETE_FROM_CART } = CartActionKind;

type AddToCart = {
  readonly type: "ADD_TO_CART";
  readonly payload: ProductProps;
};
type DeleteFromCart = {
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

type Actions = AddToCart | DeleteFromCart | UPDATE | RESET;

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
    case DELETE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item: ProductProps) => item.id !== payload),
      };
    default:
      throw new Error("Action type not found");
  }
};

export default cartReducer;
