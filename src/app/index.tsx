import { memo, useCallback, useRef, type MutableRefObject } from "react";
import { useDispatch, useSelector } from "react-redux";

import Menu from "@components/menu";
import NewCreate from "@components/new-create";
import TaskItem from "@components/task-item";
import { ThemeProvider } from "@theme/provider";

import { toggleCheck } from "../features/menu/MenuSlice";
import { toggleTask, type Task } from "../features/task/TaskSlice";
import { type RootState } from "../store";

// import useHandleChecked from "./handle-check";
// import useHandleOpen from "./handle-open";
// import useHandleClick from "./handle-create-task";
import * as styles from "./styles.css";

// export interface Task {
//   value: string;
//   description: string;
//   id: number;
//   done: boolean;
//   completed: boolean;
// }

// export const defaultTaskItem: Task[] = [
//   {
//     value: "タイトル3",
//     description: "説明3",
//     id: 3,
//     done: false,
//     completed: false,
//   },
//   {
//     value: "タイトル2",
//     description: "説明2",
//     id: 2,
//     done: false,
//     completed: false,
//   },
//   {
//     value: "タイトル1",
//     description: "説明1",
//     id: 1,
//     done: false,
//     completed: false,
//   },
// ];

const App = () => {
  const dispatch = useDispatch();

  const { taskItems } = useSelector((store: RootState) => store.task);
  const { isChecked } = useSelector((state: RootState) => state.menu);

  // const [isChecked, setIsChecked] = useState<boolean>(false);

  // const { isOpen, handleOpen } = useHandleOpen();
  // const { tasks, setTasks, handleCreateTask } = useHandleClick();

  // const { handleChecked } = useHandleChecked( {setTasks, tasks} );

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

  // const handleValueEdit = useCallback(
  //   (id: number, inputValue: string) => {
  //     const newTasks = tasks.map((task) => {
  //       if (task.id === id) {
  //         task.value = inputValue;
  //       }

  //       return task;
  //     });
  //     setTasks(newTasks);
  //   },
  //   [setTasks, tasks]
  // );

  // const handleDescriptionEdit = useCallback(
  //   (id: number, inputDescription: string) => {
  //     const newTasks = tasks.map((task) => {
  //       if (task.id === id) {
  //         task.description = inputDescription;
  //       }

  //       return task;
  //     });
  //     setTasks(newTasks);
  //   },
  //   [setTasks, tasks]
  // );

  // const falseTasks: Task[] = tasks.filter((task) => !task.done);
  const falseTasks: Task[] = taskItems.filter((item) => !item.done);

  // Reduxここ変える
  const handleToggleTask = useCallback(() => {
    // const trueTasks: Task[] = taskItems.filter((item) => item.done);
    // setTasks([...falseTasks, ...trueTasks]);
    dispatch(toggleTask());

    // isCheckedを消してみる
    // setIsChecked(!isChecked);
    dispatch(toggleCheck());
  }, [dispatch]);

  const listItems = (isChecked ? taskItems : falseTasks).map((task) => {
    // const listItems = taskItems.map((task) => {
    return (
      <li key={task.id}>
        <TaskItem
          value={task.value}
          description={task.description}
          id={task.id}
          done={task.done}
          completed={task.completed}
          // onChecked={handleChecked}
          // onValueEdit={handleValueEdit}
          // onDescriptionEdit={handleDescriptionEdit}
          onInputRef={handleInputRef}
        />
      </li>
    );
  });

  return (
    <ThemeProvider>
      <div className={styles.root}>
        <header className={styles.header}></header>
        <main className={styles.main}>
          <div className={styles.taskList}>
            <ul>{listItems}</ul>
          </div>
          <Menu onDeleteCheck={handleToggleTask} checked={isChecked} />
        </main>
        <footer className="styles.footer">
          <NewCreate id={taskItems[0].id} />
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default memo(App);
function createTheme(arg0: { palette: { mode: string } }) {
  throw new Error("Function not implemented.");
}
