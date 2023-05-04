
import thunk from "redux-thunk";







const rootReducer=combineReducers({

 
})


export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));