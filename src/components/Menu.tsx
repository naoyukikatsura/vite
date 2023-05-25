import { useEffect, useRef, type RefObject } from "react";

import * as styles from "../app/styles.css";

interface Props {
  isOpen: boolean;
  checked: boolean;
  onOpen: () => void;
  onDeleteCheck: () => void;
}

const Menu = ({ isOpen, checked, onOpen, onDeleteCheck }: Props) => {
  const menuRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (menuRef.current) isOpen && menuRef.current.focus();
  }, [isOpen]);

  return (
    <div className={styles.menu}>
      <button
        onClick={onOpen}
        type="button"
        aria-haspopup="true"
        aria-expanded={isOpen}
        className={`${styles.commonButton} ${styles.menuButton}`}
      >
        ︙
      </button>
      {isOpen ? (
        <div className={styles.menuList}>
          <div ref={menuRef} className={styles.menuTitle}>
            <input type="checkbox" id="redisplay" onChange={onDeleteCheck} checked={checked} />
            <label htmlFor="redisplay" className={styles.menuString}>
              非表示タスクも表示
            </label>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Menu;
