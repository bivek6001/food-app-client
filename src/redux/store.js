import { configureStore } from '@reduxjs/toolkit'
import productReducer from "./product/productSlice.js"
import userReducer from "./auth/authSlice.js"
import cartReducer from "./cart/cartSlice.js"
export const store= configureStore({
  reducer:{
    product: productReducer,
    user:userReducer,
    cart:cartReducer
  }
})