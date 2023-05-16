import * as styles from '../app/styles.css';

interface Props {
  Value: string
  description: string
  id: number
  done: boolean
  active: boolean
  handleDelete: () => void
  handleChecked: () => void
}

const TaskItem = ({Value, description, id, done, active, handleDelete, handleChecked}:Props) => {
  return (
    <div className={styles.taskItem}>
      <input
        type="radio"
        onChange={((event)=>{handleChecked(id, done, active); handleDelete(id)})}
        className={styles.taskCheckButton}
        checked={done}
      />
      <div>
        <div>
          <input
          type="text"
          onChange={(event)=>handleValueEdit(id, event.target.value)}
          value={Value}
          disabled={done}
          className={`${styles.titleInput} ${active ? styles.stringIsGray:''}`}
          // ref={handleInputRef}
        />
        </div>
        <div>
          <input
          type="text"
          onChange={(event)=>handleDescriptionEdit(id, event.target.value)}
          value={description}
          disabled={done}
          className={styles.descriptionInput}
          />
        </div>
      </div>
    </div>
  )
}

export default TaskItem
