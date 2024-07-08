import { createSlice } from "@reduxjs/toolkit";

const AppSlice = createSlice({
    name: 'app',
    initialState: {
        isSidebarOpen: true,
        categoryId: 'all',
    },
    reducers:{
        toggleSidebar: (state)=>{
            state.isSidebarOpen = !state.isSidebarOpen
        },
        closeSidebar: (state)=>{
            state.isSidebarOpen = false;
        },
        addCategory: (state,action)=>{
            state.categoryId = action.payload
        }
    }
})
export const { toggleSidebar, closeSidebar, addCategory } = AppSlice.actions;
export default AppSlice.reducer;