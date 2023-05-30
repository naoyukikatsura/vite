import { configureStore } from "@reduxjs/toolkit";

import menuReducer from "./features/menu/MenuSlice";
import taskReducer from "./features/task/TaskSlice";

export const store = configureStore({
  reducer: {
    task: taskReducer,
    menu: menuReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
