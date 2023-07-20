import { initialState } from "./state";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import evel from "../../../types/models/evel";
import {
  JsonPlaceholderStatePayload,
  FetchDataErrorPayload_,
  JsonPlaceholderStateData,
} from "./types";

const appSlice = createSlice({
  name: "jsonPlaceholder",
  initialState,
  reducers: {
    // fetch
    fetchDataTrigger(
      state,
      _action: PayloadAction<JsonPlaceholderStatePayload>
    ) {
      state.fetch.loading = true;
      state.fetch.done = false;
      state.fetch.error = null;
    },
    fetchDataSuccess(state, action: PayloadAction<JsonPlaceholderStateData[]>) {
      state.fetch.done = true;
      state.data =
        state.data && state.data.length
          ? [...state.data, ...action.payload]
          : action.payload;
    },
    fetchDataFailed(state, action: PayloadAction<FetchDataErrorPayload_>) {
      state.fetch.error = action.payload;
    },
    fetchDataFulfilled(state) {
      state.fetch.loading = false;
      state.fetch.done = false;
    },
    setJsonDataCount(state, action: PayloadAction<number>) {
      state.jsonDataCount = action.payload;
    },
  },
});

export const { actions, reducer, name } = appSlice;
