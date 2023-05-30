import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

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
] as Task[];

type PayloadValueObj = Pick<Task, "id" | "value">;

type PayloadDescriptionObj = Pick<Task, "id" | "description">;

const initialState = {
  taskItems,
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    // チェックしたら非表示になる
    removeItem: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;
      state.taskItems = state.taskItems.map((item) =>
        item.id === itemId ? { ...item, done: !item.done, completed: !item.completed } : item
      );
    },
    // 新しいタスクを作成する
    createItem: (state, action: PayloadAction<number>) => {
      const newId = action.payload + 1;
      const newTaskItem: Task = {
        value: "",
        description: "",
        id: newId,
        done: false,
        completed: false,
      };
      state.taskItems.unshift(newTaskItem);
    },
    // タイトル編集
    valueEdit: (state, action: PayloadAction<PayloadValueObj>) => {
      const { id, value } = action.payload;
      state.taskItems = state.taskItems.map((item) => (item.id === id ? { ...item, value } : item));
    },
    // 説明の編集
    descriptionEdit: (state, action: PayloadAction<PayloadDescriptionObj>) => {
      const { id, description } = action.payload;
      state.taskItems = state.taskItems.map((item) => (item.id === id ? { ...item, description } : item));
    },
  },
});

export const { removeItem, createItem, valueEdit, descriptionEdit } = taskSlice.actions;
export default taskSlice.reducer;
