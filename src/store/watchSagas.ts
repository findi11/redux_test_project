import { takeLatest } from "@redux-saga/core/effects";
import { fetchBaconipsumSaga } from "./modules/baconipsum/saga";
import { actions as jsonPlaceholderActions } from "./modules/jsonPlaceholder/slice";
import { actions as parametersActions } from "./modules/baconipsum/slice";
import { actions as signUpActions} from './modules/singUp/slice';
import {actions as loginActions} from './modules/login/slice'
import { actions as appActions} from './modules/app/slice'


import { fetchEvelSaga } from "./modules/evel/saga";
import { fetchJsonSaga } from "./modules/jsonPlaceholder/saga";
import { fetchSignUpSaga } from "./modules/singUp/saga";
import { fetchLoginSaga } from "./modules/login/saga";
import { autoLoginSaga } from "./modules/app/saga";

export function* watchSagas() {
    yield takeLatest(
        parametersActions.fetchDataTrigger.type,
        fetchBaconipsumSaga
      );
      // yield takeLatest(
      //   parametersActions.fetchDataTrigger.type,
      //   fetchEvelSaga
      // );
      yield takeLatest(
        jsonPlaceholderActions.fetchDataTrigger.type,
        fetchJsonSaga
      )
      yield takeLatest(
        signUpActions.fetchTrigger.type,
        fetchSignUpSaga
      )
      yield takeLatest(
        loginActions.fetchTrigger.type,
        fetchLoginSaga
      )
      yield takeLatest(
        appActions.autoLoginTrigger.type,
        autoLoginSaga
      )
}
