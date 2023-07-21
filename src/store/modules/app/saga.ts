import { call, put, takeLatest } from 'redux-saga/effects';
import jwtDecode from 'jwt-decode';

import { setAuthAccessToken } from './services';
import { actions as appActions } from './slice';
// import { actions as logoutActions } from 'store/modules/logout/slice';

// auth check state
export function* autoLoginSaga() {
  const token = localStorage.getItem('access_token');

  if (token) {
    const decodedInfo = jwtDecode(token);
    const currentTime = Date.now() / 1000;

    // @ts-ignore
    console.log(decodedInfo.exp);
    console.log(currentTime);

    // @ts-ignore
    if (decodedInfo?.exp > currentTime) {
      yield call(setAuthAccessToken, token);
      yield put(appActions.autoLoginSetToken({ token }));
    } else {
        console.log("gjgflf'vj d syfrit")
    //   yield put(logoutActions.fetchDataTrigger());
    }
  } else {
    yield put(appActions.autoLoginRestrictToken());
    // yield put(logoutActions.fetchDataTrigger());
  }
}

