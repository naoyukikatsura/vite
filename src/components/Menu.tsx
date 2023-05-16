import { useEffect, useRef } from 'react';

import * as styles from '../app/styles.css';

interface Props {
  isOpen: boolean
  // menuRef: HTMLElement
  handleOpen: () => void
  handleDeleteCheck: () => void
}

const Menu = ({handleOpen, isOpen, handleDeleteCheck}: Props) => {
  const menuRef = useRef(null)

  useEffect(() => {
    isOpen && menuRef.current.focus()
    }, [isOpen])

  // useEffect(() => {
  //   if(!menuRef.current) return
  //   isOpen && menuRef.current.focus()
  // }, [isOpen])

  return (
    <div className={styles.menu}>
      <button
        onClick={handleOpen}
        type="button"
        aria-haspopup="true"
        aria-expanded={isOpen}
        className={`${styles.commonButton} ${styles.menuButton}`}
        >
        ︙
      </button>
      {isOpen ?
        <div className={styles.menuList}>
          <div ref={menuRef} className={styles.menuTitle}>
            <input type='checkbox' id='redisplay' onChange={handleDeleteCheck}/>
            <label htmlFor='redisplay' className={styles.menuString}>非表示タスクも表示</label>
          </div>
        </div>
        : null
      }
    </div>
    )
}

export default Menu