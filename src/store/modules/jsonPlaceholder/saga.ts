import { call, delay, put } from "redux-saga/effects";
import { actions as jsonActions } from "./slice";
import * as JsonPlaceholderServices from "./services";

/**
 * Fetch parameters request/response handler
 */
export function* fetchJsonSaga({
  payload,
}: ReturnType<typeof jsonActions.fetchDataTrigger>) {
  try {
    const { data } = yield call(
      JsonPlaceholderServices.getDataJsonPlaceholder,
      payload
    );
    yield put(jsonActions.fetchDataSuccess(data));
  } catch (err: any) {
    yield put(jsonActions.fetchDataFailed(err));
  } finally {
    // yield delay(0);
    yield put(jsonActions.fetchDataFulfilled());
  }
}
