import { memo, useState, useCallback, useRef, type MutableRefObject } from "react";

import Menu from "@components/menu";
import NewCreate from "@components/new-create";
import TaskItem from "@components/task-item";
import { ThemeProvider } from "@theme/provider";

import useHandleChecked from "./handle-check";
import useHandleClick from "./handle-create-task";
import useHandleOpen from "./handle-open";
import * as styles from "./styles.css";

export type Task = {
  value: string;
  description: string;
  id: number;
  done: boolean;
  completed: boolean;
};

export const defaultTaskItem: Task[] = [
  {
    value: "タイトル3",
    description: "説明3",
    id: 3,
    done: false,
    completed: false,
  },
  {
    value: "タイトル2",
    description: "説明2",
    id: 2,
    done: false,
    completed: false,
  },
  {
    value: "タイトル1",
    description: "説明1",
    id: 1,
    done: false,
    completed: false,
  },
];

const App = () => {
  const [checked, setChecked] = useState<boolean>(false);

  const { isOpen, handleOpen } = useHandleOpen();
  const { tasks, setTasks, handleCreateTask } = useHandleClick();
  const { handleChecked } = useHandleChecked({ setTasks, tasks });

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
          task.value = inputValue;
        }

        return task;
      });
      setTasks(newTasks);
    },
    [setTasks, tasks]
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
    [setTasks, tasks]
  );

  const falseTasks: Task[] = tasks.filter((task) => !task.done);

  const handleDeleteCheck = useCallback(() => {
    const trueTasks: Task[] = tasks.filter((task) => task.done);
    setTasks([...falseTasks, ...trueTasks]);

    setChecked(!checked);
  }, [checked, falseTasks, setTasks, tasks]);

  const listItems = (checked ? tasks : falseTasks).map((task) => (
    <li key={task.id}>
      <TaskItem
        value={task.value}
        description={task.description}
        id={task.id}
        done={task.done}
        onChecked={handleChecked}
        onValueEdit={handleValueEdit}
        onDescriptionEdit={handleDescriptionEdit}
        onInputRef={handleInputRef}
        completed={task.completed}
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
          <NewCreate onClick={handleCreateTask} />
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default memo(App);
function createTheme(arg0: { palette: { mode: string } }) {
  throw new Error("Function not implemented.");
}
