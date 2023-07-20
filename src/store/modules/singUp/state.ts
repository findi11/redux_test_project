import { SignUpState } from "./types";

export const initialState: SignUpState = {
  data: null,
  fetch: {
    done: false,
    loading: false,
    error: null,
  }
};
