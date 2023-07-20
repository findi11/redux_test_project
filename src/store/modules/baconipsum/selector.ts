import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../types/store/rootState";
import { initialState } from "./state";

const selectDomain = (state: RootState) => state.baconipsum || initialState;

export const selectParametersData = createSelector(
  [selectDomain],
  (parametersState) => parametersState.data
);

export const selectParametersLoading = createSelector(
  [selectDomain],
  (parametersState) => parametersState.fetch.loading
);

export const selectParametersDone = createSelector(
  [selectDomain],
  (parametersState) => parametersState.fetch.done
);

export const selectParametersError = createSelector(
  [selectDomain],
  (parametersState) => parametersState.fetch.error
);
