import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:0
}

export const UserReducer = createSlice({
    name:'users',
    initialState,
    reducers:{
        increment:(state, action)=>{
            state.value += 1;
        }
    }
})

export const {increment} = UserReducer.actions

export default UserReducer.reducer