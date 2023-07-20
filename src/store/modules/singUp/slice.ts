/*
 * SignUp Slice
 *
 */

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ContainerState, ActionTriggerProps } from "./types";
import { initialState } from "./state";

// The initial state of the SignUp Page container


const signUpSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {
    fetchTrigger(state, action: PayloadAction<ActionTriggerProps>) {
      state.fetch.loading = true;
      state.fetch.done = false;
      state.fetch.error = null;
    },
    fetchSuccess(state) {
      state.fetch.done = true;
    },
    fetchFailed(state, action: PayloadAction<string>) {
      state.fetch.error = action.payload;
    },
    fetchFulfilled(state) {
      state.fetch.loading = false;
      state.fetch.done = false;
    },
  },
});

export const { actions, reducer, name: sliceKey } = signUpSlice;
