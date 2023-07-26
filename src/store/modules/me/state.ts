import { MeState } from "./types";

export const initialState: MeState = {
  data: null,
  fetch: {
    loading: false,
    done: false,
    error: null,
  }
};
