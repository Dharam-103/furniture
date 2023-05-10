import axios from "axios";
import {
  CART_REQUEST_DELETE,
  CART_REQUEST_FAILURE,
  CART_REQUEST_PENDING,
  CART_REQUEST_UPDATEDEC,
  CART_REQUEST_UPDATEINC,
  GET_CART_REQUEST_SUCCESS,
} from "./actionType";



export const getCart = (dispatch) => {
  dispatch({ type: CART_REQUEST_PENDING });
  fetch("https://odd-red-antelope-tux.cyclic.app/cart/getcart",{
            headers:{
                "Authorization":`Bearer ${localStorage.getItem("token")}`
            },
        })
        .then((res)=>res.json())
        .then((res)=>{
          dispatch({ type: GET_CART_REQUEST_SUCCESS, payload: res })})
        .catch((err)=>dispatch({ type: CART_REQUEST_FAILURE }))
};

export const updateCart = (id,prevtotal,price,prevquantity) => async (dispatch) => {
  let body={quantity:prevquantity+1,total:prevtotal+price}
  dispatch({ type: CART_REQUEST_PENDING });
  try {
    let res = await axios.patch(`https://odd-red-antelope-tux.cyclic.app/cart/updatecart/${id}`,body,{
      headers:{
          "Authorization":`Bearer ${localStorage.getItem("token")}`
      }
  });
    console.log(res);
     dispatch({ type: CART_REQUEST_UPDATEINC});
  } catch (err) {
    console.log(err)
    dispatch({ type: CART_REQUEST_FAILURE });
  }
};
export const updateCartDec = (id,prevtotal,price,prevquantity) => async (dispatch) => {
  let body={quantity:prevquantity-1,total:prevtotal-price}
  dispatch({ type: CART_REQUEST_PENDING });
  try {
    let res = await axios.patch(`https://odd-red-antelope-tux.cyclic.app/cart/updatecart/${id}`,body,{
      headers:{
          "Authorization":`Bearer ${localStorage.getItem("token")}`
      }
  });
    console.log(res);
     dispatch({ type: CART_REQUEST_UPDATEDEC});
  } catch (err) {
    console.log(err)
    dispatch({ type: CART_REQUEST_FAILURE });
  }
};

export const deleteCart = (id) => async (dispatch) => {
  console.log("ID",id)
  dispatch({ type: CART_REQUEST_PENDING });
  try {
    let res = await axios.delete(`https://odd-red-antelope-tux.cyclic.app/cart/deletecart/${id}`,{
      headers:{
          "Authorization":`Bearer ${localStorage.getItem("token")}`
      },
  });
    console.log(res);
    dispatch({ type: CART_REQUEST_DELETE});
  } catch (err) {
    console.log(err)
    dispatch({ type: CART_REQUEST_FAILURE });
  }
};