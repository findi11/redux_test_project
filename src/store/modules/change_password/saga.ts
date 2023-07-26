import { call, delay, put, takeLatest } from "redux-saga/effects";
import { actions as changePassActions } from "./slice";
import * as changePassServices from "./services";



/**
 * Sign Up request/response handler
 */
export function* fetchChangePassSaga({
  payload,
}: ReturnType<typeof changePassActions.fetchDataTrigger>) {
  try {
    yield call(changePassServices.changePass,payload);
  } catch (err: any) {
    console.log(err);
    yield put(changePassActions.fetchDataFailed(err));
  } finally {
    yield put(changePassActions.fetchDataFulfilled());
  }
}
