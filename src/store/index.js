import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./appSlice";
import ChatSlice from "./chatSlice";
import SearchSlice from "./searchSlice";
const store = configureStore({
    reducer:{
        app: AppSlice,
        chat: ChatSlice,
        search: SearchSlice
    }
})

export default store;