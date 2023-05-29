import { configureStore } from "@reduxjs/toolkit";

import taskReducer from "./features/task/TaskSlice";

export const store = configureStore({
  reducer: {
    task: taskReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
