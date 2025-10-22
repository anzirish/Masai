import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increment: (state, action) => {
      state.count += 1;
    },
    decremnet: (state, action) => {
      state.count -= 1;
    },
  },
});
export const { increment, decremnet } = counterSlice.actions;
export default counterSlice.reducer;
