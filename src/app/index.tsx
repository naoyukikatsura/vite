import { memo, useState, useCallback, type ComponentProps } from "react";

import Menu from "@components/Menu";
import NewCreate from "@components/NewCreate";
import TaskItem from "@components/TaskItem";
import TaskList from "@components/TaskList";
import { ThemeProvider } from "@theme/provider";

import { defaultTaskItem, type Task } from "./default-task";
import * as styles from "./styles.css";

const App = () => {

  const [inputValue, setInputValue] = useState<string>('')
  const [inputDescription, setInputDescription] = useState<string>('')
  const [tasks, setTasks] = useState<Task[]>(defaultTaskItem)
  const [anotherTasks, setAnotherTasks] = useState<Task[]>([])


  const handleSubmit:ComponentProps<'form'>['onSubmit'] = (event: { preventDefault: () => void; }) => {
    event.preventDefault()

    const newTask:Task = {
      Value: '',
      description: '',
      id: tasks.length+1,
      done: false,
      active: false,
    }

    setTasks([newTask, ...tasks])
    setInputValue('')
    setInputDescription('')
  }

  const handleValueEdit = useCallback((id: number, inputValue: string) => {
    const newTasks = tasks.map((task) => {
      if(task.id === id){
        task.Value = inputValue
      }

      return task
    })
    setTasks(newTasks)
  }, [tasks])


  // 説明の編集をここでつくる
  const handleDescriptionEdit = (id: number, inputDescription: string) => {
    const newTasks = tasks.map((task) => {
      if(task.id === id){
        task.description = inputDescription
      }

      return task
    })
    setTasks(newTasks)
  }

  const handleChecked = useCallback((id:number, done:boolean, active:boolean) => {
    const newTasks = tasks.map((task) => {
      if(task.id === id) {
        task.done = !done
        task.active = !active
      }

    return task
    })
    setTasks(newTasks)
  }, [tasks])

  const handleDelete = (id:number) => {
    const newTasks = tasks.filter((task)=>task.id !== id)
    setTasks(newTasks)

    const deletedTasks = tasks.filter((task)=>task.id === id)
    setAnotherTasks([...anotherTasks, ...deletedTasks])
  }

  const [isOpen, setIsOpen] = useState(false)




  const handleDeleteCheck = () => {
    setTasks([...tasks, ...anotherTasks])
    setAnotherTasks([])
  }

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  const deleteListItems = anotherTasks.map((anothertask) =>
    <li key={anothertask.id}>
      <TaskItem
        Value={anothertask.Value}
        description={anothertask.description}
        id={anothertask.id}
        done={anothertask.done}
        active={anothertask.active}
      />
    </li>
  )

  return (
    <ThemeProvider>
      <div className={styles.root}>
        <header className={styles.header}>
        </header>
        <main className={styles.main}>
          <div className={styles.taskList}><TaskList tasks={tasks} handleChecked={handleChecked} handleDelete={handleDelete}/></div>
          <Menu handleOpen={handleOpen} isOpen={isOpen} handleDeleteCheck={handleDeleteCheck}/>
        </main>
        <footer className='styles.footer'>
          <NewCreate handleSubmit={handleSubmit}/>
        </footer>
      </div>
    </ThemeProvider>
  )
}

export default memo(App);