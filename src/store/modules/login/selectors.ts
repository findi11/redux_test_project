import { createSelector } from '@reduxjs/toolkit';
import { initialState } from './state';
import { RootState } from '../../../types/store/rootState';

// First select the relevant part from the state
const selectDomain = (state: RootState) => state.login || initialState;

export const selectLoading = createSelector(
  [selectDomain],
  loginState => loginState.fetch.loading,
);

export const selectDone = createSelector(
  [selectDomain],
  loginState => loginState.fetch.done,
);

export const selectError = createSelector(
  [selectDomain],
  loginState => loginState.fetch.error,
);
