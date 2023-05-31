import { createSlice } from "@reduxjs/toolkit";

export interface Menu {
  isOpen: boolean;
  isChecked: boolean;
}

export const menuState: Menu = {
  isOpen: false,
  isChecked: false,
};

const initialState = menuState;

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    // isOpenの真偽値を反転
    // isOpenがtrueのときメニューリストが表示される
    toggleMenu: (state) => {
      state.isOpen = !state.isOpen;
    },
    // isCheckedの真偽値を反転
    // isCheckedがtrueのときメニューリストのチェックボックスにチェックが入る
    toggleCheck: (state) => {
      state.isChecked = !state.isChecked;
    },
  },
});

export const { toggleMenu, toggleCheck } = menuSlice.actions;
export default menuSlice.reducer;
