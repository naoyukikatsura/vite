import { type FormEventHandler } from "react";

import * as styles from "../app/styles.css";

interface Props {
  onSubmit: FormEventHandler<HTMLFormElement>;
  onCreateTask: () => void;
}

const NewCreate = ({ onSubmit, onCreateTask }: Props) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        onClick={onCreateTask}
        type="submit"
        id="newcreate"
        value="+"
        className={`${styles.commonButton} ${styles.createButton}`}
      />
      <label htmlFor="newcreate" className={styles.newCreateString}>
        新規
      </label>
    </form>
  );
};

export default NewCreate;
