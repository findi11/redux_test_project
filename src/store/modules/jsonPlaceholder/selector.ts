import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../types/store/rootState";
import { initialState } from "./state";

const selectDomain = (state: RootState) => state.jsonPlaceholder || initialState;

export const selectJsonData = createSelector(
  [selectDomain],
  (parametersState) => parametersState.data
);

export const selectJsonLoading = createSelector(
  [selectDomain],
  (parametersState) => parametersState.fetch.loading
);

export const selectJsonDone = createSelector(
  [selectDomain],
  (parametersState) => parametersState.fetch.done
);

export const selectJsonError = createSelector(
  [selectDomain],
  (parametersState) => parametersState.fetch.error
);

export const selectJsonDataCount = createSelector(
  [selectDomain],
  (parametersState) => parametersState.jsonDataCount
);