import { initialState } from "./state";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import evel from "../../../types/models/evel";
import { novaPoshtaState, FetchDataErrorPayload_ } from "./types";

const appSlice = createSlice({
  name: "novaPoshtaPayload",
  initialState,
  reducers: {
    // fetch
    fetchDataTrigger(state, _action: PayloadAction<novaPoshtaState>){
      state.fetch.loading = true;
      state.fetch.done = false;
      state.fetch.error = null;
    },
    fetchDataSuccess(state, action: PayloadAction<any[]>) {
      state.fetch.done = true;
      state.data = action.payload;
    
    },
    fetchDataFailed(state, action: PayloadAction<FetchDataErrorPayload_>) {
      state.fetch.error = action.payload;
    },
    fetchDataFulfilled(state) {
      state.fetch.loading = false;
      state.fetch.done = false;
    },
  },
});

export const { actions, reducer, name } = appSlice;
