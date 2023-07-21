/*
 * SignUp Slice
 *
 */

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ActionTriggerProps } from './types';
import { initialState } from "./state";

// The initial state of the SignUp Page container

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    fetchTrigger(state, action: PayloadAction<ActionTriggerProps>) {
      state.fetch.loading = true;
      state.fetch.done = false;
      state.fetch.error = null;
    },
    fetchSuccess(state) {
      state.fetch.done = true;
      console.log('done')
      localStorage.setItem('is login','login');
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

export const { actions, reducer, name: sliceKey } = loginSlice;
