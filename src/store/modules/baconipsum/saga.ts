import { call, delay, put, select } from "redux-saga/effects";
import { actions as parametersActions } from "./slice";
import * as BaconipsumServices from "./services";
import { selectJsonDataCount } from "../jsonPlaceholder/selector";
import { actions as jsonActions } from "../jsonPlaceholder/slice";
/**
 * Fetch parameters request/response handler
 */
export function* fetchBaconipsumSaga({
  payload,
}: ReturnType<typeof parametersActions.fetchDataTrigger>) {
  try {
    const { data } = yield call(BaconipsumServices.getData, payload);
    yield put(parametersActions.fetchDataSuccess(data));
    const jsonDataCount: number = yield select(selectJsonDataCount);
    console.log(jsonDataCount);
    yield put(
      jsonActions.fetchDataTrigger({
        start: jsonDataCount,
      })
    );
    // yield put(jsonActions.setJsonDataCount(jsonDataCount + 10));
  } catch (err: any) {
    yield put(parametersActions.fetchDataFailed(err));
  } finally {
    yield put(parametersActions.fetchDataFulfilled());
  }
}
