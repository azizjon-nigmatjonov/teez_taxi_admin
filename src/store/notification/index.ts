import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  new_count: 0,
  sound: true
};

export const { actions: notificationActions, reducer: notificationReducer } =
  createSlice({
    name: "notification",
    initialState,
    reducers: {
      setList: (state: any, { payload }) => {
        state.list = payload;
      },
      setCount: (state: any, { payload }) => {
        state.new_count = payload;
      },
      setSound: (state: any, { payload }) => {
        state.sound = payload
      }
    },
  });
