import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface Task {
  value: string;
  description: string;
  id: number;
  done: boolean;
}

export const taskItems: Task[] = [
  {
    value: "タイトル3",
    description: "説明3",
    id: 3,
    done: false,
  },
  {
    value: "タイトル2",
    description: "説明2",
    id: 2,
    done: false,
  },
  {
    value: "タイトル1",
    description: "説明1",
    id: 1,
    done: false,
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
    // タスクチェックボックスのチェックを切り替え
    // タスクのチェックは完了済であることを示す
    toggleItem: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;
      state.taskItems = state.taskItems.map((item) => (item.id === itemId ? { ...item, done: !item.done } : item));
    },
    // toggleItem: (state, action: PayloadAction<number>) => {
    //   const itemId = action.payload;
    //   if (taskItems[itemId].value === ''){return}
    //   state.taskItems = state.taskItems.map((item) =>
    //     item.id === itemId ? { ...item, done: !item.done } : item
    //   );
    // },
    // 新しいタスクを作成
    createTaskItem: (state, action: PayloadAction<number>) => {
      const newId = action.payload + 1;
      const newTaskItem: Task = {
        value: "",
        description: "",
        id: newId,
        done: false,
      };
      state.taskItems.unshift(newTaskItem);
    },
    // タスクタイトル編集
    editValue: (state, action: PayloadAction<PayloadValueObj>) => {
      const { id, value } = action.payload;
      state.taskItems = state.taskItems.map((item) => (item.id === id ? { ...item, value } : item));
    },
    // タスク説明の編集
    editDescription: (state, action: PayloadAction<PayloadDescriptionObj>) => {
      const { id, description } = action.payload;
      state.taskItems = state.taskItems.map((item) => (item.id === id ? { ...item, description } : item));
    },
    // 非表示タスクの表示するかしないか変更
    toggleTask: (state) => {
      const trueTaskItems = state.taskItems.filter((item) => item.done);
      const falseTaskItems = state.taskItems.filter((item) => !item.done);
      state.taskItems = [...falseTaskItems, ...trueTaskItems];

      // state.taskItems = state.taskItems.sort((a, b) => {
      //   if (a.done && !b.done) {
      //     return 1
      //   } else if (!a.done && b.done) {
      //     return -1
      //   }

      //   return 0
      // })
    },
  },
});

export const { toggleItem, createTaskItem, editValue, editDescription, toggleTask } = taskSlice.actions;
export default taskSlice.reducer;
