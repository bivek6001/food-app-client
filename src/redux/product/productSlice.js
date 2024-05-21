import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
const initialState = {
products:[],
status:" ",
amount:0
}
export const fetchAllProducts= createAsyncThunk(
    "product/fetchAllProducts",async  ()=>{
        const {data}= await axios.get("http://localhost:8000/product/all");
        return data

    }
)

export const fetchProductById= createAsyncThunk("prodcu/fetchById",async (id)=>{
    const {data}= await axios.get(`http://localhost:8000/product/${id}`);
    return data

})
// export const counterSlice = createSlice({
//   name: 'counter',
//   initialState,
//   reducers: {
//     increment: (state) => {
//       // Redux Toolkit allows us to write "mutating" logic in reducers. It
//       // doesn't actually mutate the state because it uses the Immer library,
//       // which detects changes to a "draft state" and produces a brand new
//       // immutable state based off those changes
//       state.value += 1
//     },
//     decrement: (state) => {
//       state.value -= 1
//     },
//     incrementByAmount: (state, action) => {
//       state.value += action.payload
//     },
//   },
// })
export const productSlice= createSlice({
    name:"product",
    initialState,
    reducers:{
        increment: (state)=>{
            state.amount++;

        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchAllProducts.pending,(state)=>{
            state.status="loading"
        }) 
        builder.addCase(fetchAllProducts.fulfilled,(state,action)=>{
            state.products= action.payload
        })
        builder.addCase(fetchProductById.pending,(state)=>{
            state.status="loading"
        })
        builder.addCase(fetchProductById.fulfilled,(state,action)=>{
            state.products= action.payload
        })
    }
})
// Action creators are generated for each case reducer function
export const { increment } = productSlice.actions

export default productSlice.reducer