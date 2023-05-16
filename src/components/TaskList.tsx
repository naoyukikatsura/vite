import TaskItem from "./TaskItem"

import type { Task } from "src/app/default-task"

interface Props {
  tasks: Task[]
  handleChecked: () => void
  handleDelete: () => void
}

const TaskList = ({ tasks, handleChecked, handleDelete }: Props) => {
  const listItems = tasks.map((task)=>
    <li key={task.id}>
      <TaskItem Value={task.Value} description={task.description} id={task.id} done={task.done} active={task.active} handleChecked={handleChecked} handleDelete={handleDelete}/>
    </li>)

  return(
      <ul>
        {listItems}
      </ul>
  )
}

export default TaskList