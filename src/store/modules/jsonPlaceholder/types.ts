export interface JsonPlaceholderState {
  data: Array<JsonPlaceholderStateData> | null;
  fetch: {
    loading: boolean;
    done: boolean;
    error: string | null;
  },
  jsonDataCount: number;
}
export type JsonPlaceholderStatePayload = {
  start : number;
};

export type JsonPlaceholderStateData = {
  body: string;
  id: number;
  title: string;
  userId: number;
};

export type FetchDataErrorPayload_ = string | null;
