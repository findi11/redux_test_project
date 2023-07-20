import { createSelector } from '@reduxjs/toolkit';

import { ContainerState } from './types';
import { initialState } from './state';
import { RootState } from '../../../types/store/rootState';

// First select the relevant part from the state
const selectDomain = (state: RootState) => state.singUp || initialState;

export const selectLoading = createSelector(
  [selectDomain],
  signUpState => signUpState.fetch.loading,
);

export const selectDone = createSelector(
  [selectDomain],
  signUpState => signUpState.fetch.done,
);

export const selectError = createSelector(
  [selectDomain],
  signUpState => signUpState.fetch.error,
);
