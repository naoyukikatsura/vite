import { useEffect, useRef, type RefObject, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as styles from "../app/styles.css";
import { toggleMenu } from "../features/menu/MenuSlice";

import type { RootState } from "../store";

interface Props {
  checked: boolean;
  onDeleteCheck: () => void;
}

const Menu = ({ checked, onDeleteCheck }: Props) => {
  const dispatch = useDispatch();

  const { isOpen } = useSelector((state: RootState) => state.menu);

  const menuRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (menuRef.current) isOpen && menuRef.current.focus();
  }, [isOpen]);

  const handleMenuClick = useCallback(() => {
    dispatch(toggleMenu());
  }, [dispatch]);

  return (
    <div className={styles.menu}>
      <button
        onClick={handleMenuClick}
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
            <input type="checkbox" id="reDisplay" onChange={onDeleteCheck} checked={checked} />
            <label htmlFor="reDisplay" className={styles.menuString}>
              非表示タスクも表示
            </label>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Menu;
