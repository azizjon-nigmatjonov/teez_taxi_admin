import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: {},
};

export const { actions: filterActions, reducer: filterReducer } = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilterData: (state: any, { payload: { pageName, filterParams } }) => {
      state.filter[pageName] = filterParams;
    },
    clearFilterData: () => initialState
  },
});
