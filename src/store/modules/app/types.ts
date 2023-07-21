import React from 'react';
/**
 * App state
 */

export interface AppState {
  token: string | null;
  error?: any | null;
}

export interface FetchSuccessPayload {
  token: string;
}


