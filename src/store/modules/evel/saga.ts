import { call, delay, put } from "redux-saga/effects";
import { actions as EvelActions } from "./slice";
import * as EvelServices from "./services";


/**
 * Fetch parameters request/response handler
 */
export function* fetchEvelSaga({
  payload,
}:  ReturnType<typeof EvelActions.fetchDataTrigger>) {
  try {
    const { datas } = yield call(EvelServices.getDataEvel, payload);
    // yield delay(2000);
    yield put(EvelActions.fetchDataSuccess(datas));
  } catch (err: any) {
    yield put(EvelActions.fetchDataFailed(err));
  } finally {
    yield put(EvelActions.fetchDataFulfilled());
  }
}
