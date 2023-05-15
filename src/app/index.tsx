import { memo, useState, useEffect, useRef, useCallback, type ComponentProps } from "react";

import { ThemeProvider } from "@theme/provider";

import * as styles from "./styles.css";


const App = () => {
  type Task = {
    Value: string
    description: string
    id: number
    done: boolean
    active: boolean
  }

  const defaultTaskItem:Task[] = [
  {
    Value: 'タイトル3',
    description: '説明3',
    id: 3,
    done: false,
    active: false,
  },
  {
    Value: 'タイトル2',
    description: '説明2',
    id: 2,
    done: false,
    active: false,
  },
  {
    Value: 'タイトル1',
    description: '説明1',
    id: 1,
    done: false,
    active: false,
  }
 ]

  const [inputValue, setInputValue] = useState<string>('')
  const [inputDescription, setInputDescription] = useState<string>('')
  const [tasks, setTasks] = useState<Task[]>(defaultTaskItem)
  const [anotherTasks, setAnotherTasks] = useState<Task[]>([])
  // const [autoFocus, setAutoFocus] = useState<boolean>(false)

  // const handleValueChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   setInputValue(event.target.value)
  // }

  // const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   setInputDescription(event.target.value)
  // }





  // const inputRef = useRef([])


  const handleSubmit:ComponentProps<'form'>['onSubmit'] = (event: { preventDefault: () => void; }) => {
    event.preventDefault()

    const newTask:Task = {
      Value: inputValue,
      description: inputDescription,
      id: tasks.length+1,
      done: false,
      active: false,
    }

    setTasks([newTask, ...tasks])
    setInputValue('')
    setInputDescription('')
  }

  // ここを変える
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
  // console.log(active)
  const handleDelete = (id:number) => {
    const newTasks = tasks.filter((task)=>task.id !== id)
    setTasks(newTasks)

    const deletedTasks = tasks.filter((task)=>task.id === id)
    setAnotherTasks([...anotherTasks, ...deletedTasks])
  }


  // const handleInputRef = (element: any) => {
  //   if (element && !inputRef.current.includes(element)) {
  //     inputRef.current.push(element)
  //   }
  // }




  const TaskItem = ({Value, description, id, done, active}:Task) => {
    // const inputRef = useRef(null)
    // useEffect(() => {
    //   inputRef.current.focus()
    // },[])
    return (
      <div className={styles.taskItem}>
        <input
          type="radio"
          onChange={((event)=>{handleChecked(id, done, active); handleDelete(id)})}
          className={styles.taskCheckButton}
          checked={done}
        />
        <div>
          <div>
            <input
            type="text"
            onChange={(event)=>handleValueEdit(id, event.target.value)}
            value={Value}
            disabled={done}
            className={`${styles.titleInput} ${active ? styles.stringIsGray:''}`}
            // ref={handleInputRef}
          />
          </div>
          <div>
            <input
            type="text"
            onChange={(event)=>handleDescriptionEdit(id, event.target.value)}
            value={description}
            disabled={done}
            className={styles.descriptionInput}
            />
          </div>
        </div>
      </div>
    )
  }

  const TaskList = () => {
    const listItems = tasks.map((task)=>
      <li key={task.id}>
        <TaskItem Value={task.Value} description={task.description} id={task.id} done={task.done} active={task.active}/>
      </li>)

    return(
        <ul>
          {listItems}
        </ul>
    )
  }

  const deleteListItems = anotherTasks.map((anothertask) =>
  <li key={anothertask.id}>
    <TaskItem Value={anothertask.Value} description={anothertask.description} id={anothertask.id} done={anothertask.done} active={anothertask.active}/>
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
      <div className={styles.menu}>
        <button
          onClick={handleOpen}
          type="button"
          aria-haspopup="true"
          aria-expanded={isOpen}
          className={`${styles.commonButton} ${styles.menuButton}`}
          >
          ︙
        </button>
        {isOpen ?
          <div className={styles.menuList}>
            <div ref={menuRef} className={styles.menuTitle}>
              <input type='checkbox' id='redisplay' onChange={handleDeleteCheck}/>
              <label htmlFor='redisplay' className={styles.menuString}>非表示タスクも表示</label>
              {/* {deleteListItems} */}
            </div>
          </div>
          : null
        }
      </div>
      )
    }



    const NewCreate = () => {
      return (
        <form onSubmit={handleSubmit}>
          <input type="submit" id='newcreate' value='+' className={`${styles.commonButton} ${styles.createButton}`}/>
          <label htmlFor='newcreate' className={styles.newCreateString}>新規</label>
        </form>
      )
    }

  return (
    <ThemeProvider>
      <div className={styles.root}>
        <header className={styles.header}>
        </header>
        <main className={styles.main}>
          <div className={styles.taskList}><TaskList/></div>
          <Menu />
        </main>
        <footer className='styles.footer'>
          <NewCreate/>
          {/* <form onSubmit={handleSubmit}> */}
            {/* <input type="text" onChange={(event) => {handleValueChange(event)}} className={styles.visuallyHidden}/>
            <input type="text" onChange={(event) => {handleDescriptionChange(event)}} className={styles.visuallyHidden}/> */}
            {/* <input type="submit" id='newcreate' value='+' className={`${styles.commonButton} ${styles.createButton}`}/>
            <label htmlFor='newcreate' className={styles.newCreateString}>新規</label>
          </form> */}
        </footer>
      </div>
    </ThemeProvider>
  )
}

export default memo(App);