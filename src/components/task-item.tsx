import { forwardRef, useCallback, type LegacyRef } from "react";
import { useDispatch } from "react-redux";

import * as styles from "../app/styles.css";
import { hiddenItem, editValue, editDescription, type Task } from "../features/task/TaskSlice";

interface Props extends Task {
  // onChecked: (id: number) => void;
  // onValueEdit: (id: number, inputValue: string) => void;
  // onDescriptionEdit: (id: number, inputDescription: string) => void;
  onInputRef: LegacyRef<HTMLInputElement>;
}
const TaskItem = forwardRef(({ value, description, id, done, onInputRef }: Props, ref) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.taskItem}>
      {/* <input
          type="checkbox"
          onChange={useCallback(() => {
            onChecked(id);
          }, [id, onChecked])}
          className={styles.taskCheckButton}
        /> */}
      <input
        type="checkbox"
        onChange={useCallback(() => {
          dispatch(hiddenItem(id));
        }, [dispatch, id])}
        className={styles.taskCheckButton}
        checked={done}
      />
      <div>
        <div>
          {/* <input
              type="text"
              onChange={useCallback(
                (event: React.ChangeEvent<HTMLInputElement>) => onValueEdit(id, event.target.value),
                [id, onValueEdit]
              )}
              value={value}
              disabled={done}
              className={`${styles.titleInput} ${done ? styles.stringIsGray : ""}`}
              ref={onInputRef}
            /> */}
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
          />
        </div>
        <div>
          {/* <input
              type="text"
              onChange={useCallback(
                (event: { target: { value: string } }) => onDescriptionEdit(id, event.target.value),
                [id, onDescriptionEdit]
              )}
              value={description}
              disabled={done}
              className={styles.descriptionInput}
            /> */}
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
          />
        </div>
      </div>
    </div>
  );
});

export default TaskItem;
