import { call, delay, put, takeLatest } from "redux-saga/effects";
import { actions as appActions } from '../app/slice'
import { actions as loginActions } from "./slice";
import loginService from "./services";
import { setAuthAccessToken} from "../app/services";

/**
 * Sign Up request/response handler
 */
export function* fetchLoginSaga({
  payload,
}: ReturnType<typeof loginActions.fetchTrigger>) {
  try {
    console.log('1')
    const { accessToken } = yield call(loginService, payload);

    // yield localStorage.setItem('remember_token', rememberToken);

    yield put(loginActions.fetchSuccess());

    console.log('====================================');
    console.log('success');
    console.log('====================================');

    yield put(appActions.autoLoginSetToken({ token: accessToken }));
    yield call(setAuthAccessToken, accessToken);

  } catch (err: any) {
    console.log(err);
    yield put(loginActions.fetchFailed(err));
  } finally {
   console.log('6')
    yield put(loginActions.fetchFulfilled());
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* loginSaga() {
  yield takeLatest(loginActions.fetchTrigger.type, fetchLoginSaga);
}
