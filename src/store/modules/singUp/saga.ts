import { call, put, takeLatest } from 'redux-saga/effects';
// import { actions as appActions } from 'store/app/slice';
import { actions as signUpActions } from './slice';
import { actions as appActions } from '../app/slice'
import signUpService from './services';
import { setAuthAccessToken } from '../app/services';

/**
 * Sign Up request/response handler
 */
export function* fetchSignUpSaga({
  payload,
}: ReturnType<typeof signUpActions.fetchTrigger>) {
  try {
    const { data } = yield call(signUpService, payload);
    console.log(data.accessToken);
  //  yield call(signUpService, payload);
    yield put(signUpActions.fetchSuccess());

    yield put(appActions.autoLoginSetToken({ token: data.accessToken }));
    yield call(setAuthAccessToken, data.accessToken);
    
    // yield put(appActions.loginSuccess(accessToken));
  } catch (err:any) {
    yield put(signUpActions.fetchFailed(err));
  } finally {
    yield put(signUpActions.fetchFulfilled());
  }
}

/**
 * Root saga manages watcher lifecycle
 */

