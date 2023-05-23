import * as styles from "../app/styles.css";

interface Props {
  onClick: () => void;
}

const NewCreate = ({ onClick }: Props) => {
  return (
    <div>
      <input
        onClick={onClick}
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
