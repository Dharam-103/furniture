import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import {reducer as productReducer} from "./Sofa/reducer";
import {reducer as CartReducer} from "./Cart/reducer";

const rootReducer = combineReducers({
    productReducer,CartReducer
})

export const store = legacy_createStore(rootReducer , applyMiddleware(thunk))