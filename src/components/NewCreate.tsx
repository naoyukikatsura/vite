import * as styles from '../app/styles.css';

interface Props {
  handleSubmit: () => void
}

const NewCreate = ({handleSubmit}: Props) => {
      return (
        <form onSubmit={handleSubmit}>
          <input type="submit" id='newcreate' value='+' className={`${styles.commonButton} ${styles.createButton}`}/>
          <label htmlFor='newcreate' className={styles.newCreateString}>新規</label>
        </form>
      )
    }

export default NewCreate