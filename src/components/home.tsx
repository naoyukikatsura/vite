import useSWR from "swr";

import { fetcher } from "../api/index";

import type { FC } from "react"



// interface Todo { id: number; title: string; completed: boolean };
const Home: FC = () => {
  const { data: todoList, error, isLoading } = useSWR('/todo-list', fetcher)


  // null, undefined, 0 , ''もfalseなのでnullに指定したい
  if (error != null) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  console.log({todoList})

  return (
    <>
      <p>ToDo</p>

      <ul>
        {
        todoList.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              id={String(todo.id)}
              checked={todo.completed}
            />
            <label htmlFor={String(todo.id)}>{todo.title}</label>
          </li>
        ))}
      </ul>

    </>
  )
}

export default Home