import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./appSlice";
import ChatSlice from "./chatSlice";
const store = configureStore({
    reducer:{
        app: AppSlice,
        chat: ChatSlice,
    }
})

export default store;