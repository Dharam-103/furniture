import {
  CART_REQUEST_SUCCESS,
  DELETE_STAY_HOTEL,
  GET_CART_REQUEST_SUCCESS,
  HOTEL_REQUEST_FAILURE,
  HOTEL_REQUEST_PENDING,
  HOTEL_REQUEST_SUCCESS,
  PLACES_REQUEST_SUCCESS,
} from "./actionType";

const initialstate = {
  isLoading: false,
  isError: false,
  cart: [{
    id: 1,
    quantity: 1,
    price: 200,
    image: "https://t-cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
    name: "Hotels",
    total: 200
  },
  {
    id: 2,
    quantity: 1,
    price: 200,
    image: "https://t-cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
    name: "Hotels",
    total: 200
  }],
};

export const reducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case CART_REQUEST_SUCCESS:
      return { ...state, isLoading: false, cart: payload };
    case GET_CART_REQUEST_SUCCESS:
      return { ...state, isLoading: false, cart: payload };
    
    default:
      return state;
  }
};
