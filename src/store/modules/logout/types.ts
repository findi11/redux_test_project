export interface LogoutState {
  fetch: {
    loading: boolean;
    done: boolean;
    error?: unknown | null;
  };
}

export type FetchPayloadErrorType = unknown | null;
