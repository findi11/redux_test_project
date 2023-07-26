import { createSelector } from '@reduxjs/toolkit';
import { initialState } from './state';
import { RootState } from '../../../types/store/rootState';

// First select the relevant part from the state
const selectDomain = (state: RootState) => state.logout || initialState;

export const selectLogout = createSelector(
  [selectDomain],
  logoutState => logoutState.fetch.loading,
);

export const selectDone = createSelector(
  [selectDomain],
  logoutState => logoutState.fetch.done,
);

export const selectError = createSelector(
  [selectDomain],
  logoutState => logoutState.fetch.error,
);
