
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ActionTriggerProps, MeStateData } from './types';
import { initialState } from "./state";

// The initial state of the SignUp Page container

const meSlice = createSlice({
  name: "me",
  initialState,
  reducers: {
    fetchDataTrigger(state) {
      state.fetch.loading = true;
      state.fetch.done = false;
      state.fetch.error = null;
      console.log('dsdsds')
    },
    fetchDataSuccess(state, action:PayloadAction<MeStateData> ) {
      state.fetch.done = true;
      state.data = action.payload
    },
    fetchDataFailed(state, action: PayloadAction<string>) {
      state.fetch.error = action.payload;
    },
    fetchDataFulfilled(state) {
      state.fetch.loading = false;
      state.fetch.done = false;
    },
  },
});

export const { actions, reducer, name: sliceKey } = meSlice;
