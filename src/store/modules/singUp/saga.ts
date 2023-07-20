import { call, put, takeLatest } from 'redux-saga/effects';
// import { actions as appActions } from 'store/app/slice';
import { actions as signUpActions } from './slice';
import signUpService from './services';

/**
 * Sign Up request/response handler
 */
export function* fetchSignUpSaga({
  payload,
}: ReturnType<typeof signUpActions.fetchTrigger>) {
  try {

   yield call(signUpService, payload);
    yield put(signUpActions.fetchSuccess());

    
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
export function* signUpSaga() {
  yield takeLatest(signUpActions.fetchTrigger.type, fetchSignUpSaga);
}
