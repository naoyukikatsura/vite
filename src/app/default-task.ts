export type Task = {
  Value: string;
  description: string;
  id: number;
  done: boolean;
  active: boolean;
};

export const defaultTaskItem: Task[] = [
  {
    Value: "タイトル3",
    description: "説明3",
    id: 3,
    done: false,
    active: false,
  },
  {
    Value: "タイトル2",
    description: "説明2",
    id: 2,
    done: false,
    active: false,
  },
  {
    Value: "タイトル1",
    description: "説明1",
    id: 1,
    done: false,
    active: false,
  },
];
