import { memo, useState, useCallback, useRef, type MutableRefObject } from "react";

import Menu from "@components/Menu";
import NewCreate from "@components/NewCreate";
import TaskItem from "@components/TaskItem";
import { ThemeProvider } from "@theme/provider";

import { defaultTaskItem, type Task } from "./default-task";
import * as styles from "./styles.css";

const App = () => {

  const [inputValue, setInputValue] = useState<string>('')
  const [inputDescription, setInputDescription] = useState<string>('')
  const [tasks, setTasks] = useState<Task[]>(defaultTaskItem)
  const [anotherTasks, setAnotherTasks] = useState<Task[]>([])
  const [isOpen, setIsOpen] = useState(false)


  const handleSubmit:React.FormEventHandler<HTMLFormElement> = useCallback((event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (tasks[0].Value !== '' && tasks[0].description !== '') {
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
  }, [tasks])


  const inputRefs: MutableRefObject<HTMLInputElement[]> = useRef([])

  const handleInputRef = useCallback((element: HTMLInputElement) => {
  if (!inputRefs.current.includes(element)) {
    inputRefs.current.push(element)
  }
  inputRefs.current[inputRefs.current.length-1].focus()
  }, [])






  // console.log(`inputRefs.currentの配列の長さ:${inputRefs.current.length}`)






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
  const handleDescriptionEdit = useCallback((id: number, inputDescription: string) => {
    const newTasks = tasks.map((task) => {
      if(task.id === id){
        task.description = inputDescription
      }

      return task
    })
    setTasks(newTasks)
  }, [tasks])

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


  const handleDelete = useCallback((id:number) => {
    const newTasks = tasks.filter((task)=>task.id !== id)
    setTasks(newTasks)

    const deletedTasks = tasks.filter((task)=>task.id === id)
    setAnotherTasks([...anotherTasks, ...deletedTasks])
  }, [anotherTasks, tasks])






  const handleDeleteCheck = useCallback(() => {
    setTasks([...tasks, ...anotherTasks])
    setAnotherTasks([])
  }, [anotherTasks, tasks])



  const handleOpen = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])



  const deleteListItems = anotherTasks.map((anothertask) =>
    <li key={anothertask.id}>
      <TaskItem
        Value={anothertask.Value}
        description={anothertask.description}
        id={anothertask.id}
        done={anothertask.done}
        active={anothertask.active}
        onChecked={handleChecked}
        onDelete={handleDelete}
        onValueEdit={handleValueEdit}
        onDescriptionEdit={handleDescriptionEdit}
        onInputRef={handleInputRef}

      />
    </li>
  )

  const listItems = tasks.map((task) =>
    <li key={task.id}>
      <TaskItem
        Value={task.Value}
        description={task.description}
        id={task.id}
        done={task.done}
        active={task.active}
        onChecked={handleChecked}
        onDelete={handleDelete}
        onValueEdit={handleValueEdit}
        onDescriptionEdit={handleDescriptionEdit}
        onInputRef={handleInputRef}
      />
    </li>
  )



  return (
    <ThemeProvider>
      <div className={styles.root}>
        <header className={styles.header}>
        </header>
        <main className={styles.main}>
          <div className={styles.taskList}>
            {/* <TaskList
            tasks={tasks}
            onChecked={handleChecked}
            onDelete={handleDelete}
            onValueEdit={handleValueEdit}
            onDescriptionEdit={handleDescriptionEdit}
            onInputRef={handleInputRef}
            /> */}



            <ul>
              {listItems}
            </ul>

          </div>
          <Menu onOpen={handleOpen} isOpen={isOpen} onDeleteCheck={handleDeleteCheck}/>
        </main>
        <footer className='styles.footer'>
          <NewCreate onSubmit={handleSubmit}/>
        </footer>
      </div>
    </ThemeProvider>
  )
}

export default memo(App);