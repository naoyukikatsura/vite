import { memo, useState, useEffect, useRef, useCallback, type FormEvent } from "react";

import "./visually.css";

const App = () => {
  type Task = {
    Value: string
    description: string
    id: number
    done: boolean
  }

  const defaultTaskItem:Task[] = [
  {
    Value: 'タイトル3',
    description: '説明3',
    id: 3,
    done: false
  },
  {
    Value: 'タイトル2',
    description: '説明2',
    id: 2,
    done: false
  },
  {
    Value: 'タイトル1',
    description: '説明1',
    id: 1,
    done: false
  }
 ]

  const [inputValue, setInputValue] = useState<string>('')
  const [inputDescription, setInputDescription] = useState<string>('')
  const [tasks, setTasks] = useState<Task[]>(defaultTaskItem)
  const [anotherTasks, setAnotherTasks] = useState<Task[]>([])

  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputDescription(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTask:Task = {
      Value: inputValue,
      description: inputDescription,
      id: tasks.length+1,
      done: false
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

  const handleChecked = (id:number, done:boolean) => {
    const newTasks = tasks.map((task) => {
      if(task.id === id) {
        task.done = !done
      }

return task
    })
    setTasks(newTasks)
  }

  const handleDelete = (id:number) => {
    const newTasks = tasks.filter((task)=>task.id !== id)
    setTasks(newTasks)

    const deletedTasks = tasks.filter((task)=>task.id === id)
    setAnotherTasks([...anotherTasks, ...deletedTasks])
  }

  const TaskItem = ({Value, description, id, done}:Task) => {
    return (
      <>
        <input
          type="radio"
          onChange={((e)=>{handleChecked(id, done); handleDelete(id)})}
          />
        <input
          type="text"
          onChange={(e)=>handleValueEdit(id, e.target.value)}
          value={Value}
          disabled={done}
        />
        <input
          type="text"
          onChange={(e)=>handleDescriptionEdit(id, e.target.value)}
          value={description}
          disabled={done}
        />
      </>
    )
  }

  const TaskList = () => {
    const listItems = tasks.map((task)=>
      <li key={task.id}>
        <TaskItem Value={task.Value} description={task.description} id={task.id} done={task.done}/>
      </li>)

    return(
      <ul>
        {listItems}
      </ul>
    )
  }

  const deleteListItems = anotherTasks.map((anothertask) =>
  <li key={anothertask.id}>
    <TaskItem Value={anothertask.Value} description={anothertask.description} id={anothertask.id} done={anothertask.done}/>
  </li>
  )

  const Menu = () => {
    const [isOpen, setIsOpen] = useState(false)
    const menuRef:any = useRef()

    useEffect(() => {
      isOpen && menuRef.current.focus()
    }, [isOpen])

    const handleDeleteCheck = () => {
      setTasks([...tasks, ...anotherTasks])
      setAnotherTasks([])
    }

    const handleOpen = () => {
      setIsOpen(!isOpen)
    }

    return (
      <>
        <button onClick={handleOpen} type="button" aria-haspopup="true" aria-expanded={isOpen}>
          ︙
        </button>
        {isOpen ?
          <ul ref={menuRef} >
            <input type='checkbox' id='redisplay' onChange={handleDeleteCheck}/>
            <label htmlFor='redisplay'>非表示タスクも表示</label>
            {deleteListItems}
          </ul> : null
        }
      </>
      )
    }

    console.log(tasks)

  return (
    <>
      <TaskList/>
      <form onSubmit={(e) => {handleSubmit(e)}}>
        <input type="text" onChange={(e) => {handleValueChange(e)}} className='inputText visually-hidden'/>
        <input type="text" onChange={(e) => {handleDescriptionChange(e)}} className='inputText visually-hidden'/>
        <input type="submit" id='newcreate' value='+'/>
        <label htmlFor='newcreate'>新規</label>
      </form>
      <Menu />
    </>
  )
}

export default memo(App);