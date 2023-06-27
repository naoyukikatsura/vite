import path from "node:path";

import cors from "cors";
import express from "express";

import type { Express, Request, Response } from "express";

// import { Todo } from "../types"

const app: Express = express();
const port = process.env.PORT ?? 3001

app.use(cors());
app.use(express.static(path.join(__dirname, '../index.html')))

interface Todo { id: number; title: string; completed: boolean };

const sampleData: Todo[] = [
  { id: 1, title: "1つめ", completed: false },
  { id: 2, title: "2つめ", completed: true },
  { id: 3, title: "3つめ", completed: false },
  { id: 4, title: "4つめ", completed: false },
]

const todoList: Todo[] = sampleData

// localhost:3001/todo-listにアクセスするとToDoリストを返す
// ポート番号も自分で変更可能
app.get("/todo-list", (req: Request, res: Response) => {
  res.json(todoList)
})

app.listen(port, () => {
  console.log(`${port}でサーバー起動中`);
});
