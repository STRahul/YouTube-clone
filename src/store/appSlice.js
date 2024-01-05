import { createSlice } from "@reduxjs/toolkit";

const AppSlice = createSlice({
    name: 'app',
    initialState: {
        isSidebarOpen: true
    },
    reducers:{
        toggleSidebar: (state)=>{
            state.isSidebarOpen = !state.isSidebarOpen
        }
    }
})
export const { toggleSidebar } = AppSlice.actions;
export default AppSlice.reducer;