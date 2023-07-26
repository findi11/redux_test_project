
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState } from "./state";
import { FetchPayloadErrorType } from "./types";

// The initial state of the SignUp Page container

const logoutSlice = createSlice({
  name: "logout",
  initialState,
  reducers: {
    fetchTrigger(state) {
      state.fetch.loading = true;
      state.fetch.done = false;
      state.fetch.error = null;
    },
    fetchSuccess(state) {
      state.fetch.done = true;
    
    },
    fetchFailed(state, action: PayloadAction<FetchPayloadErrorType>) {
      state.fetch.error = action.payload;
    },
    fetchFulfilled(state) {
      state.fetch.loading = false;
      state.fetch.done = false;
    },
  },
});

export const { actions, reducer, name: sliceKey } = logoutSlice;
