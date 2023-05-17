import { forwardRef, useCallback, type LegacyRef } from 'react';

import * as styles from '../app/styles.css';

interface Task {
  Value: string
  description: string
  id: number
  done: boolean
  active: boolean
}

export interface Props extends Task {
  onChecked: (id: number, done: boolean, active: boolean) => void
  onValueEdit: (id: number, inputValue:string) => void
  onDescriptionEdit: (id: number, inputDescription: string) => void
  onInputRef: LegacyRef<HTMLInputElement>
}

const TaskItem = forwardRef(({Value, description, id, done, active, onChecked, onValueEdit, onDescriptionEdit, onInputRef}:Props, ref) => {
  return (
    <div className={styles.taskItem}>
      <input
        type="radio"
        onChange={useCallback(()=>{onChecked(id, done, active)}, [active, done, id, onChecked])}
        className={styles.taskCheckButton}
        checked={done}
      />
      <div>
        <div>
          <input
          type="text"
          onChange={useCallback((event:React.ChangeEvent<HTMLInputElement>)=>onValueEdit(id, event.target.value), [id, onValueEdit])}
          value={Value}
          disabled={done}
          className={`${styles.titleInput} ${active ? styles.stringIsGray:''}`}
          ref={onInputRef}
          />
        </div>
        <div>
          <input
          type="text"
          onChange={useCallback((event: { target: { value: string; }; })=>onDescriptionEdit(id, event.target.value), [id, onDescriptionEdit])}
          value={description}
          disabled={done}
          className={styles.descriptionInput}
          />
        </div>
      </div>
    </div>
  )
})

export default TaskItem
