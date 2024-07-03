import { createSlice } from "@reduxjs/toolkit";

const AppSlice = createSlice({
    name: 'app',
    initialState: {
        isSidebarOpen: true,
    },
    reducers:{
        toggleSidebar: (state)=>{
            state.isSidebarOpen = !state.isSidebarOpen
        },
        closeSidebar: (state)=>{
            state.isSidebarOpen = false;
        }
    }
})
export const { toggleSidebar, closeSidebar } = AppSlice.actions;
export default AppSlice.reducer;