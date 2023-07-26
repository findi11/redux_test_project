import Baconipsum from "../../../types/models/Baconipsum";

export interface changePass {
  data: null | any;
  fetch: {
    loading: boolean;
    done: boolean;
    error: string | null;
  };
}
export type changePassPayload = {
  password: string;
  password_confirmation: string;
};

export type FetchDataErrorPayload = string | null;
