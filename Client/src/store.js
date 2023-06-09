import { createStore, combineReducers, applyMiddleware } from "redux";
// import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { getAllPizzaReducer } from "./reducers/pizzaReducer";
import { cartReducer } from "./reducers/cartReducer";
import {registerUserReducer,loginUserReducer} from "./reducers/userReducer";

const currentUser=localStorage.getItem('currentUser')?JSON.parse(localStorage.getItem('currentUser')):null
const rootReducer = combineReducers({
    getAllPizzaReducer: getAllPizzaReducer,
    cartReducer: cartReducer,
    registerUserReducer:registerUserReducer,
    loginUserReducer:loginUserReducer
})

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
 
const initialState = {
    cartReducer: {
        cartItems: cartItems
    },
    loginUserReducer:{
        currentUser:currentUser
    }
}
const middleware = [thunk]

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);
export default store;