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
    // メニューボタンクリックでisOpenの真偽値を反転
    toggleMenu: (state) => {
      state.isOpen = !state.isOpen;
    },
    // メニューのチェックボックスをチェックでisCheckedの真偽値を反転
    toggleCheck: (state) => {
      state.isChecked = !state.isChecked;
    },
  },
});

export const { toggleMenu, toggleCheck } = menuSlice.actions;
export default menuSlice.reducer;
