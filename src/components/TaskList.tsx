import { useState } from 'react'

import Task from './Task'



const TaskList = () => {
  const [tasks, setTasks] = useState([<Task taskTitle='タイトル1' taskDescription='説明1' />, <Task taskTitle='タイトル2' taskDescription='説明2' />])
  // const tasks = [<Task taskTitle='タイトル1' taskDescription='説明1' />, <Task taskTitle='タイトル2' taskDescription='説明2' />]

  // const handleClick = () => {
  //   alert('OK')
  //   const newTask = <Task taskTitle='新規' taskDescription='新規' />
  //   setTasks([newTask, ...tasks])
  // }

  return (
    <ul>
      {tasks.map((task) => (<li>{task}</li>))}
    </ul>
  )
}

export default TaskList