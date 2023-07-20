import { EvelState } from "./types";

export const initialState: EvelState = {
  data: null,
  fetch: {
    done: false,
    loading: false,
    error: null,
  },
};
