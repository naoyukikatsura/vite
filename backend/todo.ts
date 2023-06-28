import { db } from '@vercel/postgres';

import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  const client = await db.connect();

  // テーブルの作成
  // try {
  //   await client.sql`CREATE TABLE TODO ( Value text, Description text, Id integer, Done boolean );`;
  //   const tasks = ['タスクタイトル1', 'タスク説明1', 1, true];
  //   await client.sql`INSERT INTO TODO (Value, Description, Id, Done) VALUES (${tasks[0]}, ${tasks[1]}, ${tasks[2]}, ${tasks[3]});`;
  // } catch (error) {
  //   return response.status(500).json({ error });
  // }

  // TODOテーブルのデータ取得
  const todo = await client.sql`SELECT * FROM TODO;`;

  return response.status(200).json({ todo });
}