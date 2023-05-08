import { PRODUCT_FAILURE, PRODUCT_REQUEST,GET_PRODUCT_SUCCESS} from "./actionType"

const initialState = {
  isLoading: false,
  isError: false,
  sofas:[],
}

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCT_REQUEST:
      return { ...state, isLoading: true }
    case PRODUCT_FAILURE:
      return { ...state, isLoading: false, isError: true }
      case GET_PRODUCT_SUCCESS:
        return { ...state, isLoading: false, sofas:payload }
    default:
      return state;
  }
}