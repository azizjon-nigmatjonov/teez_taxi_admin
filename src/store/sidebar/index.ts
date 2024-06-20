import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  collapsed: false
};

export const { actions: sidebarActions, reducer: sidebarReducer } =
  createSlice({
    name: "sidebar",
    initialState,
    reducers: {
      setCollapsed: (state: any, { payload }) => {
        state.collapsed = payload;
      },
    },
  });
