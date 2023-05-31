import { memo, useCallback, useRef, type MutableRefObject } from "react";
import { useDispatch, useSelector } from "react-redux";

import Menu from "@components/menu";
import NewCreate from "@components/new-create";
import TaskItem from "@components/task-item";
import { ThemeProvider } from "@theme/provider";

import { toggleCheck } from "../features/menu/MenuSlice";
import { toggleTask, type Task } from "../features/task/TaskSlice";
import { type RootState } from "../store";

import * as styles from "./styles.css";

const App = () => {
  const dispatch = useDispatch();

  const { taskItems } = useSelector((store: RootState) => store.task);
  const { isChecked } = useSelector((state: RootState) => state.menu);

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

  const falseTasks: Task[] = taskItems.filter((item) => !item.done);

  const handleToggleTask = useCallback(() => {
    // 未チェックタスクだけを表示するのか、チェック済タスクを含めた全タスクを表示するのかを決定
    dispatch(toggleTask());
    // メニューリストのチェックボックスのチェックの有無を変更
    dispatch(toggleCheck());
  }, [dispatch]);

  const listItems = (isChecked ? taskItems : falseTasks).map((task) => {
    return (
      <li key={task.id}>
        <TaskItem
          value={task.value}
          description={task.description}
          id={task.id}
          done={task.done}
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
