import TaskItem from "./TaskItem"

import type {Task} from "./TaskItem";


interface Props {
  tasks: Task[]
  onChecked: (id: number, done: boolean, active: boolean) => void
  onDelete: (id: number) => void
  onInputRef: () => void
  onValueEdit: () => void
  onDescriptionEdit: () => void
}

const TaskList = ({ tasks, onChecked, onDelete, onInputRef, onValueEdit, onDescriptionEdit }: Props ) => {
  const listItems = tasks.map((task)=>
    <li key={task.id}>
      <TaskItem
        Value={task.Value}
        description={task.description}
        id={task.id}
        done={task.done}
        active={task.active}
        onChecked={onChecked}
        onDelete={onDelete}
        onValueEdit={onValueEdit}
        onDescriptionEdit={onDescriptionEdit}
        ref={onInputRef}
      />
    </li>)

  return(
      <ul>
        {listItems}
      </ul>
  )
}

export default TaskList