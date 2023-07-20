export interface novaPoshtaState {
  data: Array<novaPoshtaStateData> | null;
  fetch: {
    loading: boolean;
    done: boolean;
    error: string | null;
  };
}
export type novaPoshtaStatePayload = {
  start : number;
};

export type novaPoshtaStateData = {
  apiKey: string;
  cityName: string;
};

export type FetchDataErrorPayload_ = string | null;
