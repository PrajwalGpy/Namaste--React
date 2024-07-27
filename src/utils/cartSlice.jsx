import { createSlice } from "@reduxjs/toolkit";

let cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    add: (state, action) => {
      state.items.push(action.payload);
    },
    removeAll: (state) => {
      state.items.length = [];
    },
  },
});

export default cartSlice.reducer;
export const { add, removeAll } = cartSlice.actions;
