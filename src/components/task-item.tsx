import { forwardRef, useCallback, type LegacyRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as styles from "../app/styles.css";
import { toggleItem, editValue, editDescription, type Task } from "../features/task/TaskSlice";

import type { RootState } from "../store";

interface Props extends Task {
  onInputRef: LegacyRef<HTMLInputElement>;
}
const TaskItem = forwardRef(({ value, description, id, done, onInputRef }: Props, ref) => {
  const dispatch = useDispatch();
  const { taskItems } = useSelector((store: RootState) => store.task);

  const handleChange = useCallback(() => {
    dispatch(toggleItem(id));
  }, [dispatch, id]);

  return (
    <div className={styles.taskItem}>
      <input
        type="checkbox"
        // onChange={useCallback(() => {
        //   dispatch(toggleItem(id));
        // }, [dispatch, id])}
        onChange={handleChange}
        className={styles.taskCheckButton}
        checked={done}
      />
      <div>
        <div>
          <input
            type="text"
            onChange={useCallback(
              (event: React.ChangeEvent<HTMLInputElement>) =>
                dispatch(
                  editValue({
                    id,
                    value: event.target.value,
                  })
                ),
              [dispatch, id]
            )}
            value={value}
            disabled={done}
            className={`${styles.titleInput} ${done ? styles.stringIsGray : ""}`}
            ref={onInputRef}
            placeholder="タスクタイトルを入力..."
          />
        </div>
        <div>
          <input
            type="text"
            onChange={useCallback(
              (event: React.ChangeEvent<HTMLInputElement>) =>
                dispatch(
                  editDescription({
                    id,
                    description: event.target.value,
                  })
                ),
              [dispatch, id]
            )}
            value={description}
            disabled={done}
            className={styles.descriptionInput}
            // placeholder="タスク説明を入力..."
          />
        </div>
      </div>
    </div>
  );
});

export default TaskItem;
