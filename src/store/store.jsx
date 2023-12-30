import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./reducer/UserReducer";
import ProductReducer from "./reducer/ProductReducer";


export const store = configureStore({
    reducer:{
        UserReducer:UserReducer,
        ProductReducer:ProductReducer
    }
})