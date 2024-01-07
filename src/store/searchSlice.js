import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
  name: "seacrh",
  initialState: {},
  reducers: {
    saveCaches: (state, action) => {
      state = Object.assign(state,action.payload);
      Object.entries(state).splice(10,1)

    },
  },
});

export const { saveCaches } = SearchSlice.actions;

export default SearchSlice.reducer;
