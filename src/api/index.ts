interface Todo { id: number; title: string; completed: boolean };

export const fetcher = async (path: string) => {
  try {
    // const res = await fetch('http://localhost:3001' + path)
    const res = await fetch('https://express-react-practice-express.vercel.app' + path)

    return res.json()
  }
  catch (error) {
    alert(error)
  }
}



// useSWR関数の第一引数にURLのstring（これをキーとしてデータをキャッシュする）
// useSWR関数の第二引数に、第一引数で渡したURLを引数に取り、データを返すfetch関数
// export const useTodoList = () => useSWR<Todo[]>('/todo-list', fetcher)
