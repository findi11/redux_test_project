import { LoginState } from "./types";

export const initialState: LoginState = {
  data: null,
  fetch: {
    done: false,
    loading: false,
    error: null,
  }
};
