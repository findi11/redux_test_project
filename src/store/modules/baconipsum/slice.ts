import { initialState } from "./state";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Baconipsum from "../../../types/models/Baconipsum";
import { BaconipsumStatePayload, FetchDataErrorPayload } from "./types";

const appSlice = createSlice({
  name: "baconipsum",
  initialState,
  reducers: {
    // fetch
    fetchDataTrigger(state, _action: PayloadAction<BaconipsumStatePayload>) {
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
