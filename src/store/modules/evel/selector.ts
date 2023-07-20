import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../types/store/rootState";
import { initialState } from "./state";

const selectDomaieval = (state: RootState) => state.evel || initialState;

export const selectEvelData = createSelector(
  [selectDomaieval],
  (parametersState) => parametersState.data
);

export const selectEvelLoading = createSelector(
  [selectDomaieval],
  (parametersState) => parametersState.fetch.loading
);

export const selectEvelDone = createSelector(
  [selectDomaieval],
  (parametersState) => parametersState.fetch.done
);

export const selectEvelError = createSelector(
  [selectDomaieval],
  (parametersState) => parametersState.fetch.error
);
