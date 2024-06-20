import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mqtt: {},
  messageName: ""
};

export const { actions: mqttActions, reducer: mqttReducer } = createSlice(
  {
    name: "mqtt",
    initialState,
    reducers: {
      setData: (state: any, { payload }) => {                        
        state.mqtt = payload || {};
        state.messageName = payload?.message?.name || ""
      },
    },
  }
);
