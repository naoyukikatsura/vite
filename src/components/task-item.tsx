import { forwardRef, useCallback, type LegacyRef } from "react";
import { useDispatch } from "react-redux";

import { type Task } from "../app/index";
import * as styles from "../app/styles.css";
import { removeItem } from "../features/task/TaskSlice";

interface Props extends Task {
  onChecked: (id: number) => void;
  onValueEdit: (id: number, inputValue: string) => void;
  onDescriptionEdit: (id: number, inputDescription: string) => void;
  onInputRef: LegacyRef<HTMLInputElement>;
}
const TaskItem = forwardRef(
  ({ value, description, id, done, onChecked, onValueEdit, onDescriptionEdit, onInputRef, completed }: Props, ref) => {
    const dispatch = useDispatch();

    return (
      <div className={styles.taskItem}>
        <button
          onClick={useCallback(() => {
            dispatch(removeItem(id));
          }, [dispatch, id])}
        >
          完了
        </button>
        <input
          type="checkbox"
          onChange={useCallback(() => {
            onChecked(id);
          }, [id, onChecked])}
          className={styles.taskCheckButton}
          checked={completed}
        />
        <div>
          <div>
            <input
              type="text"
              onChange={useCallback(
                (event: React.ChangeEvent<HTMLInputElement>) => onValueEdit(id, event.target.value),
                [id, onValueEdit]
              )}
              value={value}
              disabled={done}
              className={`${styles.titleInput} ${done ? styles.stringIsGray : ""}`}
              ref={onInputRef}
            />
          </div>
          <div>
            <input
              type="text"
              onChange={useCallback(
                (event: { target: { value: string } }) => onDescriptionEdit(id, event.target.value),
                [id, onDescriptionEdit]
              )}
              value={description}
              disabled={done}
              className={styles.descriptionInput}
            />
          </div>
        </div>
      </div>
    );
  }
);

export default TaskItem;
