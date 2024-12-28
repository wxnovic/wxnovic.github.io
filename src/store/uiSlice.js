import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    sidebarVisible: false,
  },
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarVisible = !state.sidebarVisible;
    },
    setSidebarVisible: (state, action) => {
      state.sidebarVisible = action.payload;
    },
  },
});

export const { toggleSidebar, setSidebarVisible } = uiSlice.actions;
export default uiSlice.reducer;