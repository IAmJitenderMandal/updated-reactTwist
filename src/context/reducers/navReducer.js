import { CART_SIDEBAR, SEARCH_SHOW, SET_MOBILE_MENU } from "../action.types";

export const navReducer = (state, action) => {
  switch (action.type) {
    case CART_SIDEBAR:
      return {
        ...state,
        isCartSideBarActive:
          state.isCartSideBarActive === "" ? action.payload : "",
      };

    case SEARCH_SHOW:
      return {
        ...state,
        isSearchActive: state.isSearchActive === "" ? action.payload : "",
      };

    case SET_MOBILE_MENU:
      return {
        ...state,
        searchSideBarMobile:
          state.searchSideBarMobile === "" ? action.payload : "",
      };

    default:
      return state;
  }
};
