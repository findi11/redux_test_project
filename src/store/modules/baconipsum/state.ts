import { BaconipsumState } from "./types";

export const initialState: BaconipsumState = {
  data: null,
  fetch: {
    done: false,
    loading: false,
    error: null,
  },
};
