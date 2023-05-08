import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import {reducer as CartReducer} from "./Redux/Cart/reducer"





const rootReducer=combineReducers({
    CartReducer
 
})


export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));