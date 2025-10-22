import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "products",
  initialState: { items: [], totalPrice: 0 },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updatePrice: (state, action) => {
      const { mode, amount } = action.payload;
      if (mode === "add") {
        state.totalPrice += amount;
      }
      if (mode === "sub") {
        state.totalPrice -= amount;
      }
    },
  },
});

export const { addItem, removeItem, updatePrice } = cartSlice.actions;
export default cartSlice.reducer;
