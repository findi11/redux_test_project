import { call, put, takeLatest } from "redux-saga/effects";
// import { actions as appActions } from 'store/app/slice';
import { actions as loginActions } from "./slice";
import loginService from "./services";

/**
 * Sign Up request/response handler
 */
export function* fetchLoginSaga({
  payload,
}: ReturnType<typeof loginActions.fetchTrigger>) {
  try {
    yield call(loginService, payload);
    yield put(loginActions.fetchSuccess());
  } catch (err: any) {
    yield put(loginActions.fetchFailed(err));
  } finally {
    yield put(loginActions.fetchFulfilled());
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* loginSaga() {
  yield takeLatest(loginActions.fetchTrigger.type, fetchLoginSaga);
}
