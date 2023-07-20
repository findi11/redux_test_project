import { JsonPlaceholderState } from "./types";

export const initialState: JsonPlaceholderState = {
  data: null,
  fetch: {
    done: false,
    loading: false,
    error: null,
  },
  jsonDataCount: 10,
};
