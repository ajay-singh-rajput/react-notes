import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product:null,
}

export const ProductReducer = createSlice({
    name:'products',
    initialState,
    reducers:{
        getProducts:(state, action)=>{
            state.product = action.payload
        }
    }
});

export const {getProducts} = ProductReducer.actions;
export default ProductReducer.reducer