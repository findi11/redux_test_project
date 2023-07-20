import Baconipsum from "../../../types/models/Baconipsum";

export interface BaconipsumState {
  data: Array<string> | null;
  fetch: {
    loading: boolean;
    done: boolean;
    error: string | null;
  };
}
export type BaconipsumStatePayload = {
  paras: number;
  sentences: number;
};

export type FetchDataErrorPayload = string | null;
