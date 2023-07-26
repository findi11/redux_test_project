import { initialState } from "./state";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { changePassPayload, FetchDataErrorPayload } from "./types";

const appSlice = createSlice({
  name: "changePassword",
  initialState,
  reducers: {
    // fetch
    fetchDataTrigger(state, _action: PayloadAction<changePassPayload>) {
      state.fetch.loading = true;
      state.fetch.done = false;
      state.fetch.error = null;
    },
    fetchDataSuccess(state, action: PayloadAction<string[]>) {
      state.fetch.done = true;
      state.data = action.payload;
    },
    fetchDataFailed(state, action: PayloadAction<FetchDataErrorPayload>) {
      state.fetch.error = action.payload;
    },
    fetchDataFulfilled(state) {
      state.fetch.loading = false;
      state.fetch.done = false;
    },
  },
});

export const { actions, reducer, name } = appSlice;
