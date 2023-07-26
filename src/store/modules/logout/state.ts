import { LogoutState } from "./types";

export const initialState: LogoutState = {
  fetch: {
    done: false,
    loading: false,
    error: null,
  }
};
