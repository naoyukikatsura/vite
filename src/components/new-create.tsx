import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as styles from "../app/styles.css";
import { createTaskItem } from "../features/task/TaskSlice";

import type { RootState } from "../store";

interface Props {
  id: number;
}

const NewCreate = ({ id }: Props) => {
  const dispatch = useDispatch();
  const { taskItems } = useSelector((store: RootState) => store.task);

  const handleClick = useCallback(() => {
    if (taskItems[0].value === "") {
      return;
    }
    dispatch(createTaskItem(id));
  }, [dispatch, id, taskItems]);

  return (
    <div>
      <input
        onClick={handleClick}
        type="submit"
        id="newcreate"
        value="+"
        className={`${styles.commonButton} ${styles.createButton}`}
      />
      <label htmlFor="newcreate" className={styles.newCreateString}>
        新規
      </label>
    </div>
  );
};

export default NewCreate;
