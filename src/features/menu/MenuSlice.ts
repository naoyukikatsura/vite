import { createSlice } from "@reduxjs/toolkit";

export interface Menu {
  isOpen: boolean;
}

export const menuState: Menu = {
  isOpen: false,
};

const initialState = menuState;

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    // メニューボタンクリックでisOpenの真偽値を反転
    openMenu: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { openMenu } = menuSlice.actions;
export default menuSlice.reducer;
