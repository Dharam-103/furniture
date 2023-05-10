import {
  CART_REQUEST_DELETE,
  CART_REQUEST_SUCCESS,
  CART_REQUEST_UPDATEDEC,
  CART_REQUEST_UPDATEINC,
  GET_CART_REQUEST_SUCCESS,
} from "./actionType";

const initialstate = {
  isLoading: false,
  isError: false,
  cart: [],
};

export const reducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case CART_REQUEST_SUCCESS:
      return { ...state, isLoading: false, cart: payload };
    case GET_CART_REQUEST_SUCCESS:
      return { ...state, isLoading: false, cart: payload };
      case CART_REQUEST_DELETE: {
        return {
          ...state,
          isLoading:false
        };
      }
        case CART_REQUEST_UPDATEINC: {
          return {
            ...state,
           isLoading:false
          };
      }
      case CART_REQUEST_UPDATEDEC: {
        return {
          ...state,
         isLoading:false
        };
    }
    
    default:
      return state;
  }
};
