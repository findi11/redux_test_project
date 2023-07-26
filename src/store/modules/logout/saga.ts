import { call, delay, put, takeLatest } from "redux-saga/effects";
import { actions as appActions } from "../app/slice";
import { actions as logoutActions } from "./slice";
import logoutServeces from "./services";
import { setAuthAccessToken } from "../app/services";
import { deleteAuthAccessToken } from "./services";

export function* fetchLogoutSaga({
  payload,
}: ReturnType<typeof logoutActions.fetchTrigger>) {
  try {
    yield call(logoutServeces);
    yield put(logoutActions.fetchSuccess());
  } catch (err: any) {
    yield put(logoutActions.fetchFailed(err));
  } finally {
    yield put(logoutActions.fetchFulfilled());
    yield call(deleteAuthAccessToken);
    yield put(appActions.autoLoginRestrictToken());

  }
}
