import { useCallback } from "react";
import { useDispatch } from "react-redux";

import * as styles from "../app/styles.css";
import { createItem } from "../features/task/TaskSlice";

interface Props {
  // onClick: () => void;
  id: number;
}

// const NewCreate = ({ onClick }: Props) => {
const NewCreate = ({ id }: Props) => {
  const dispatch = useDispatch();

  return (
    <div>
      {/* <input
        onClick={onClick}
        type="submit"
        id="newcreate"
        value="+"
        className={`${styles.commonButton} ${styles.createButton}`}
      /> */}
      <input
        onClick={useCallback(() => {
          dispatch(createItem(id));
        }, [dispatch, id])}
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
