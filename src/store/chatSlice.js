import { createSlice } from "@reduxjs/toolkit";
import { CHAT_LENGTH } from "../utils/constants";
const ChatSlice = createSlice({
    name:'chat',
    initialState:{
        message:[]
    },
    reducers:{
        addMessage:(state,action)=>{
            state.message.splice(CHAT_LENGTH,1)
            state.message.unshift(action.payload)
        }
    }
});
 
export const { addMessage } = ChatSlice.actions;

export default ChatSlice.reducer;