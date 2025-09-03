import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "task",
  initialState: {tasks: [] },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    markComplete: (state, action) => {
      state.tasks.map((task) => {
        task.id === action.payload ? (task.status = !task.status) : task;
      });
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const {addTask, markComplete, removeTask} = taskSlice.actions
export default taskSlice.reducer