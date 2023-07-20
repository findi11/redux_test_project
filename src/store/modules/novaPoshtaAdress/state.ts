import { novaPoshtaState } from "./types";

export const initialState: novaPoshtaState = {
  data: null,
  fetch: {
    done: false,
    loading: false,
    error: null,
  },
};
