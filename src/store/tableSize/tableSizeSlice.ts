import { createSlice } from "@reduxjs/toolkit";

export const { actions: tableSizeAction, reducer: tableSizeReducer } =
  createSlice({
    name: "tableSize",
    initialState: {
      tableSize: {},
      tableSettings: {},
      tableHeight: 'medium',
    },
    reducers: {
      setTableSize: (state: any, { payload: { pageName, colID, colWidth} }) => {
        state.tableSize[pageName] = state.tableSize[pageName] || {};
        state.tableSize[pageName][colID] = colWidth;
      },
      setTableHeight: (state, { payload: { tableHeight } }) => {
        state.tableHeight = tableHeight;
      },
      setTableSettings: (
        state: any,
        { payload: { pageName, colID, colWidth, isStiky, colIdx } }
      ) => {
        state.tableSettings[pageName] = state.tableSettings[pageName] || [];
        if (state.tableSettings[pageName].find((item: any) => item.id === colID)) {
          const selectedColumn = state.tableSettings[pageName].find(
            (item: any) => item.id === colID
          );

          selectedColumn.isStiky =
            isStiky === "ineffective"
              ? selectedColumn.isStiky
              : isStiky && selectedColumn.isStiky
              ? !isStiky
              : isStiky;
          selectedColumn.colWidth = colWidth
            ? colWidth
            : selectedColumn.colWidth;
          selectedColumn.colIdx = colIdx ? colIdx : selectedColumn.colIdx;
        } else {
          state.tableSettings[pageName].push({
            id: colID,
            isStiky: isStiky === "ineffective" ? false : isStiky,
            colWidth: colWidth,
            colIdx,
          });

          state.tableSettings[pageName] = state.tableSettings[pageName].sort(
            (a: any, b: any) => a.colIdx - b.colIdx
          )
        }
      },
    },
  });
