import { createSlice,PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './state';
import { FetchSuccessPayload } from './types';

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    autoLoginTrigger(state) {
      state.error = null;
    },
    autoLoginSetToken(state, action: PayloadAction<FetchSuccessPayload>) {
      state.token = action.payload.token;
    },
    autoLoginRestrictToken(state) {
      state.token = null;
    },
  },
});

export const { actions, reducer, name } = appSlice;
