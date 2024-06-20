import { createSlice } from "@reduxjs/toolkit"

export const {
  actions: alertActions,
  reducer: alertReducer
} = createSlice({
  name: "alert",
  initialState: {
    alerts: [],
  },
  reducers: {
    addAlert(state, {payload}) {
      state.alerts = payload
    },
    deleteAlert(state, {payload}) {
      state.alerts = state.alerts.filter((alert: any) => alert.id !== payload)
    },
  }
})