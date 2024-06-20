import { configureStore } from "@reduxjs/toolkit"
import UserReducer from './user-slice'
export  const store=configureStore({
    reducer:{
      User:UserReducer
    }
})