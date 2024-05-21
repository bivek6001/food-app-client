import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'


const initialState={
    user:false
}


const userSlice= createSlice({
    name:"user",
    initialState,
    reducers:{
        initiate:(state,action)=>{
            state.user=action.payload;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase
    }


})
export const {initiate}= userSlice.actions;

export default userSlice.reducer;