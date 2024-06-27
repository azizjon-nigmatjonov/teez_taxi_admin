import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  columns: {},
};

export const { actions: tableStoreActions, reducer: tableReducer } = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setColumns: (state: any, { payload: { pageName, payload } }) => {
      state.columns[pageName] = payload;
    },
  },
});
