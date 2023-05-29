import { createSlice } from "@reduxjs/toolkit";

export interface Task {
  value: string;
  description: string;
  id: number;
  done: boolean;
  completed: boolean;
}

export const taskItems: Task[] = [
  {
    value: "タイトル3",
    description: "説明3",
    id: 3,
    done: false,
    completed: false,
  },
  {
    value: "タイトル2",
    description: "説明2",
    id: 2,
    done: false,
    completed: false,
  },
  {
    value: "タイトル1",
    description: "説明1",
    id: 1,
    done: false,
    completed: false,
  },
];

const initialState = {
  taskItems,
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    // チェックしたら非表示になる
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.taskItems = state.taskItems.filter((item) => item.id !== itemId);
      alert("クリックされた");
    },

    //   if (tasks[0].value !== "") {
    //   setTasks((prevTasks) =>
    //     prevTasks.map((task) => (task.id === id ? { ...task, done: !task.done, completed: !task.completed } : task))
    //   );
    // }
  },
});

export const { removeItem } = taskSlice.actions;
export default taskSlice.reducer;
