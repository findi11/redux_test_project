import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../types/store/rootState";
import { initialState } from "./state";

const selectDomain = (state: RootState) => state.changePass || initialState;

export const selectParametersData = createSelector(
  [selectDomain],
  (changePasswordState) => changePasswordState.data
);

export const selectParametersLoading = createSelector(
  [selectDomain],
  (changePasswordState) => changePasswordState.fetch.loading
);

export const selectParametersDone = createSelector(
  [selectDomain],
  (changePasswordState) => changePasswordState.fetch.done
);

export const selectParametersError = createSelector(
  [selectDomain],
  (changePasswordState) => changePasswordState.fetch.error
);
