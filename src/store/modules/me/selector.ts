import { createSelector } from '@reduxjs/toolkit';
import { initialState } from './state';
import { RootState } from '../../../types/store/rootState';

// First select the relevant part from the state
const selectDomain = (state: RootState) => state.me || initialState;


export const selectMeData = createSelector(
  [selectDomain],
  meState => meState.data,
);

export const selectMeLoading = createSelector(
  [selectDomain],
  (meState) => meState.fetch.loading,
);

export const selectMeDone = createSelector(
  [selectDomain],
  (meState) => meState.fetch.done,
);

export const selectMeError = createSelector(
  [selectDomain],
  (meState) => meState.fetch.error,
);
