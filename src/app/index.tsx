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
  const [isOpen, setIsOpen] = useState<boolean>(false)
  // const [isDone, setIsDone] = useState<boolean>(false)
  const [count, setCount] = useState<number>(3)



  const handleCreateTask = useCallback(() => {
    setCount(count+1)
  },[count])


  const handleSubmit:React.FormEventHandler<HTMLFormElement> = useCallback((event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (tasks[0].Value !== '' && tasks[0].description !== '') {
      const newTask:Task = {
        Value: '',
        description: '',
        id: count,
        done: false,
        active: false,
      }

      setTasks([newTask, ...tasks])
      setInputValue('')
      setInputDescription('')
    }
  }, [count, tasks])


  const inputRefs: MutableRefObject<(HTMLInputElement | null)[]> = useRef([])

  const handleInputRef = useCallback((element: HTMLInputElement) => {
    if (!inputRefs.current.includes(element)) {
      // console.log(inputRefs.current.includes(element), inputRefs.current.length, inputRefs.current)
      inputRefs.current.push(element)
      // console.log(inputRefs.current.includes(element), inputRefs.current.length, inputRefs.current)

    }

    const inputElement: HTMLInputElement | null = inputRefs.current[inputRefs.current.length-1]

    // if (inputElement === null){
    //   return
    // }

    if (inputRefs.current.includes(null) || inputElement === null){
      return
    }
    inputElement.focus()

    // console.log(inputRefs.current.includes(null))
    // console.log(inputRefs.current)
    // console.log(inputElement)

  }, [])


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

    // setTasks((prevTask) =>
    //   prevTask.map((obj) => (obj.done === false ? {done:true} : obj))
    // )








    const currentTasks: Task[] = tasks.filter((task)=>task.id !== id)
    const archivedTask: Task | undefined = tasks.find((task)=>task.id === id)
    if (archivedTask === undefined) {
      return
    }
    archivedTask.done = !done
    archivedTask.active = !active





    setTasks(currentTasks)
    setAnotherTasks([...anotherTasks, archivedTask])


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
        onValueEdit={handleValueEdit}
        onDescriptionEdit={handleDescriptionEdit}
        onInputRef={handleInputRef}
      />
    </li>
  )
  // console.log(tasks[0].id, tasks[1].id, tasks[2].id)
  // console.log(tasks[tasks.length-1].id)
  // console.log(`${tasks.length}番目のid:${tasks[0].id}`)




  return (
    <ThemeProvider>
      <div className={styles.root}>
        <header className={styles.header}>
        </header>
        <main className={styles.main}>
          <div className={styles.taskList}>
            <ul>
              {listItems}
            </ul>

          </div>
          <Menu onOpen={handleOpen} isOpen={isOpen} onDeleteCheck={handleDeleteCheck}/>
        </main>
        <footer className='styles.footer'>
          <NewCreate onSubmit={handleSubmit} createTask={handleCreateTask}/>
        </footer>
      </div>
    </ThemeProvider>
  )
}

export default memo(App);