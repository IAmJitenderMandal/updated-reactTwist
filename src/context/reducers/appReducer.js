import { ADD_TO_CART } from "../action.types";

export const appReducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartProductsToSendInDB: [
          ...state.cartProductsToSendInDB,
          { ...action.payload.productForDB },
        ],
        produtToShowInCart: [
          ...state.produtToShowInCart,
          { ...action.payload.productsToShow },
        ],
      };
    default:
      return state;
  }
};
