type TaskData = {
  taskTitle: string
  taskDescription: string
}
const Task = ({ taskTitle, taskDescription }: TaskData) => {
  return (
    <div className='task'>
      <input type='checkbox' />
      <div className='content'>
        <input type="text" value={taskTitle} className='taskTitle' />
        <input type="text" value={taskDescription} className='taskDescription' />
      </div>
    </div>
  )
}
export default Task
