import axios from "axios";
import {
  ADMIN_REQUEST_DELETE,
  ADMIN_REQUEST_FAILURE,
  ADMIN_REQUEST_PENDING,
  ADMIN_REQ_UPDATE_DEC,
  ADMIN_REQUEST_UPDATE_INC,
  ADMIN_CART_REQ_SUCCESS,
} from "./actionType";



export const getCart = (dispatch) => {
  dispatch({ type: ADMIN_REQUEST_PENDING });
  fetch("https://odd-red-antelope-tux.cyclic.app/cart/getcart",{
            headers:{
                "Authorization":`Bearer ${localStorage.getItem("token")}`
            },
        })
        .then((res)=>res.json())
        .then((res)=>{
          dispatch({ type: ADMIN_CART_REQ_SUCCESS, payload: res })})
        .catch((err)=>dispatch({ type: ADMIN_REQUEST_FAILURE }))
};

export const updateAdmin = (id,prevtotal,price,prevquantity) => async (dispatch) => {
  let body={quantity:prevquantity+1,total:prevtotal+price}
  dispatch({ type: ADMIN_REQUEST_PENDING });
  try {
    let res = await axios.patch(`https://odd-red-antelope-tux.cyclic.app/cart/updatecart/${id}`,body,{
      headers:{
          "Authorization":`Bearer ${localStorage.getItem("token")}`
      }
  });
    console.log(res);
     dispatch({ type: ADMIN_REQUEST_UPDATE_INC});
  } catch (err) {
    console.log(err)
    dispatch({ type: ADMIN_REQUEST_FAILURE });
  }
};
export const updateCartDec = (id,prevtotal,price,prevquantity) => async (dispatch) => {
  let body={quantity:prevquantity-1,total:prevtotal-price}
  dispatch({ type: ADMIN_REQUEST_PENDING });
  try {
    let res = await axios.patch(`https://odd-red-antelope-tux.cyclic.app/cart/updatecart/${id}`,body,{
      headers:{
          "Authorization":`Bearer ${localStorage.getItem("token")}`
      }
  });
    console.log(res);
     dispatch({ type: ADMIN_REQ_UPDATE_DEC});
  } catch (err) {
    console.log(err)
    dispatch({ type: ADMIN_REQUEST_FAILURE });
  }
};

export const deleteCart = (id) => async (dispatch) => {
  console.log("ID",id)
  dispatch({ type: ADMIN_REQUEST_PENDING });
  try {
    let res = await axios.delete(`https://odd-red-antelope-tux.cyclic.app/cart/deletecart/${id}`,{
      headers:{
          "Authorization":`Bearer ${localStorage.getItem("token")}`
      },
  });
    console.log(res);
    dispatch({ type: ADMIN_REQUEST_DELETE});
  } catch (err) {
    console.log(err)
    dispatch({ type: ADMIN_REQUEST_FAILURE });
  }
};



 