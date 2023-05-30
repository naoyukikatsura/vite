import { useEffect, useRef, type RefObject, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as styles from "../app/styles.css";
import { openMenu } from "../features/menu/MenuSlice";

import type { RootState } from "../store";

interface Props {
  // isOpen: boolean;
  checked: boolean;
  // onOpen: () => void;
  onDeleteCheck: () => void;
}

const Menu = ({ checked, onDeleteCheck }: Props) => {
  const dispatch = useDispatch();

  // const { menuState } = useSelector((store: RootState) => store.menu);
  const { isOpen } = useSelector((state: RootState) => state.menu);

  const menuRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (menuRef.current) isOpen && menuRef.current.focus();
  }, [isOpen]);

  return (
    <div className={styles.menu}>
      <button
        // onClick={onOpen}
        onClick={useCallback(() => {
          dispatch(openMenu());
        }, [dispatch])}
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
