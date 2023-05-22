import { memo, useState, useCallback, useRef, type MutableRefObject } from "react";

import Menu from "@components/Menu";
import NewCreate from "@components/NewCreate";
import TaskItem from "@components/TaskItem";
import { ThemeProvider } from "@theme/provider";

import handleCreateTask from "./handle-create-task";
import * as styles from "./styles.css";



export type Task = {
  Value: string;
  description: string;
  id: number;
  done: boolean;
  active: boolean;
};

export const defaultTaskItem: Task[] = [
  {
    Value: "タイトル3",
    description: "説明3",
    id: 3,
    done: false,
    active: false,
  },
  {
    Value: "タイトル2",
    description: "説明2",
    id: 2,
    done: false,
    active: false,
  },
  {
    Value: "タイトル1",
    description: "説明1",
    id: 1,
    done: false,
    active: false,
  },
];

const App = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [inputDescription, setInputDescription] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>(defaultTaskItem);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);
  const [count, setCount] = useState<number>(3)

  // const handleCreateTask = useCallback(() => {
  //   setCount(count + 1);
  // }, [count]);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (tasks[0].Value !== "" && tasks[0].description !== "") {
        const newTask: Task = {
          Value: "",
          description: "",
          id: count,
          done: false,
          active: false,
        };

        setTasks([newTask, ...tasks]);
        setInputValue("");
        setInputDescription("");
      }
    },
    [count, tasks]
  );

  const inputRefs: MutableRefObject<(HTMLInputElement | null)[]> = useRef([]);

  const handleInputRef = useCallback((element: HTMLInputElement) => {
    if (!inputRefs.current.includes(element)) {
      inputRefs.current.push(element);
    }

    const inputElement: HTMLInputElement | null = inputRefs.current[inputRefs.current.length - 1];

    if (inputRefs.current.includes(null) || inputElement === null) {
      return;
    }
    inputElement.focus();
  }, []);

  const handleValueEdit = useCallback(
    (id: number, inputValue: string) => {
      const newTasks = tasks.map((task) => {
        if (task.id === id) {
          task.Value = inputValue;
        }

        return task;
      });
      setTasks(newTasks);
    },
    [tasks]
  );

  const handleDescriptionEdit = useCallback(
    (id: number, inputDescription: string) => {
      const newTasks = tasks.map((task) => {
        if (task.id === id) {
          task.description = inputDescription;
        }

        return task;
      });
      setTasks(newTasks);
    },
    [tasks]
  );

  const handleChecked = useCallback((id: number, done: boolean, active: boolean) => {
    setTasks((prevTasks) => prevTasks.map((task) => (task.id === id ? { ...task, done: true } : task)));
  }, []);
  const falseTasks: Task[] = tasks.filter((task) => !task.done);

  const handleDeleteCheck = useCallback(() => {
    const trueTasks: Task[] = tasks.filter((task) => task.done);
    setTasks([...falseTasks, ...trueTasks]);

    setChecked(!checked);
  }, [checked, falseTasks, tasks]);

  const handleOpen = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const listItems = (checked ? tasks : falseTasks).map((task) => (
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
  ));

  return (
    <ThemeProvider>
      <div className={styles.root}>
        <header className={styles.header}></header>
        <main className={styles.main}>
          <div className={styles.taskList}>
            <ul>{listItems}</ul>
          </div>
          <Menu onOpen={handleOpen} isOpen={isOpen} onDeleteCheck={handleDeleteCheck} checked={checked} />
        </main>
        <footer className="styles.footer">
          <NewCreate onSubmit={handleSubmit} createTask={handleCreateTask} />
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default memo(App);
function createTheme(arg0: { palette: { mode: string } }) {
  throw new Error("Function not implemented.");
}
