import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "./axios-instance";
export const loginUser=createAsyncThunk('loginuser',async (data)=>{
   const response=await axiosInstance.post('/signin',data)
   return response.data
})
export const registerUser=createAsyncThunk('register',async (data)=>{
    const response=await axiosInstance.post('/create',data);
    return response.data
})
const UserSlice=createSlice({
    name:'user',
    initialState:{
        user:null
    },
    extraReducers:(builder)=>{
        builder.addCase(loginUser.fulfilled,(state,action)=>{
            state.user=action.payload.user
        }),
        builder.addCase(loginUser.rejected,(state,action)=>{
            state.user=null
        }),
        builder.addCase(registerUser.fulfilled,(state,action)=>{
            state.user=action.payload.user
        }),
        builder.addCase(registerUser.rejected,(state,action)=>{
            state.user=null
        })
    }
})
// reducers example in createSlice
// reducers:{
//     login:async (state,action)=>{
//         const response=await axiosInstance.post('/signin',action.payload).catch(err=>{console.log(err);})
//         state.user=response.data.user
//     },
//     register:async (state,action)=>{
//         const response=await axiosInstance.post('/create',action.payload)
//         state.user=response.data.user
        
//     }
//    }
export default UserSlice.reducer 