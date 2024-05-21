import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  cart: [],
  total: 0,
};


const cartSlice= createSlice({
name:"cart",
initialState,
reducers:{
    addItem:(state,action)=>{
        state.cart.push(action.payload)
    },
    removeItem:(state,action)=>{
        state.cart.splice(action.payload,1)
    }
}


})

export const {addItem,removeItem}=cartSlice.actions;
export default cartSlice.reducer;