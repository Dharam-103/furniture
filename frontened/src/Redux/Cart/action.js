import axios from "axios";
import {
  CART_REQUEST_FAILURE,
  CART_REQUEST_PENDING,
  GET_CART_REQUEST_SUCCESS,
} from "./actionType";


// export const postHotelCart = (obj) => (dispatch) => {
//   console.log(obj);
//   dispatch({ type: HOTEL_REQUEST_PENDING });
//   axios
//     .post(`http://localhost:8080/hotelcart`, obj)
//     .then((res) => {
//       console.log(res.data);
//       dispatch({ type: CART_REQUEST_SUCCESS, payload: res.data });
//     })
//     .catch((res) => dispatch({ type: HOTEL_REQUEST_FAILURE }));
// };

export const getCart = (dispatch) => {
  dispatch({ type: CART_REQUEST_PENDING });
  axios
    .get(`/cart`)
    .then((res) => {
      dispatch({ type: GET_CART_REQUEST_SUCCESS, payload: res.data });
    })
    .catch((res) => dispatch({ type: CART_REQUEST_FAILURE }));
};

// https://odd-red-antelope-tux.cyclic.app