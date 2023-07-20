import evel from "../../../types/models/evel";

export interface EvelState {
  data: Array<string>| null;
  fetch: {
    loading: boolean;
    done: boolean;
    error: string | null;
  };
}
export type EvelStatePayload = {
  lang: string,
};

export type FetchDataErrorPayload_ = string | null;
