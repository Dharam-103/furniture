import { PRODUCT_FAILURE, PRODUCT_REQUEST, GET_PRODUCT_SUCCESS,ADD_PRODUCT_SUCCESS} from "./actionType";
import axios from "axios";


export const getProducts = (paramobj) => (dispatch) =>{
    dispatch({ type: PRODUCT_REQUEST })
    axios
        .get(`https://odd-red-antelope-tux.cyclic.app/sofas`,paramobj)
        .then((res) => {
            //   console.log(res.data)
            dispatch({ type: GET_PRODUCT_SUCCESS , payload:res.data})
        })
        .catch(() => {
            dispatch({ type: PRODUCT_FAILURE })
        })
}


// export const getSingleProduct = ( id) => (dispatch) =>{
//     dispatch({ type: PRODUCT_REQUEST })
//     return axios
//         .get(`https://odd-red-antelope-tux.cyclic.app/sofas/${id}`)
//         .then((res) => {
//              console.log(res.data)
//             dispatch({ type: GET_PRODUCT_SUCCESS})
//         })
//         .catch(() => {
//             dispatch({ type: PRODUCT_FAILURE })
//         })
// }


export const addToCart = (image,name,price) => (dispatch) => {
    let cartData = {image,name,price,quantity:1,total:price}
    dispatch({ type: PRODUCT_REQUEST })
    axios
    .post("https://odd-red-antelope-tux.cyclic.app/cart/addtocart", cartData,{
        headers:{
            "Authorization":`Bearer ${localStorage.getItem("token")}`
        },
    })
        .then((res) => {
            console.log("cart",res)
            dispatch({ type: ADD_PRODUCT_SUCCESS})
        })
        .catch((err) => {
            dispatch({ type: PRODUCT_FAILURE })
        })
}



