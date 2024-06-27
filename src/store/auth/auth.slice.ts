import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  token: "",
};

export const { actions: authActions, reducer: authReducer } = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
    },
    login: (state, { payload }) => {
      state.token = payload?.access_token ?? "";
    },
    logout: () => initialState,
  },
});
