import { call, delay, put, takeLatest } from "redux-saga/effects";
import { actions as meActions } from "./slice";
import meService from "./services";


/**
 * Sign Up request/response handler
 */
export function* featchMeSaga() {
  try {
    const { data } = yield call(meService);
    yield put(meActions.fetchDataSuccess(data));
  } catch (err: any) {
    console.log(err);
    yield put(meActions.fetchDataFailed(err));
  } finally {
    yield put(meActions.fetchDataFulfilled());
  }
}

