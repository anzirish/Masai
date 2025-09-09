import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Task } from "../types";

interface taskState {
  tasks: Task[];
}

const initialState: taskState = { tasks: [] };

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    markTaskCompleted: (state, action: PayloadAction<number>) => {
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) {
        task.completion = !task.completion;
      }
    },

    removeTasks: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter(
        (task: Task) => task.id !== action.payload
      );
    },
  },
});

export const { addTask, markTaskCompleted, removeTasks } = taskSlice.actions;
export default taskSlice.reducer;