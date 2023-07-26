import { reducer as baconipsum } from "./modules/baconipsum/slice";
import { reducer as evel } from "./modules/evel/slice";
import {reducer as jsonPlaceholder} from './modules/jsonPlaceholder/slice';
import {reducer as signUp} from './modules/singUp/slice';
import {reducer as login } from './modules/login/slice';
import { reducer as app} from './modules/app/slice'
import { reducer as me} from './modules/me/slice'
import {reducer as logout} from './modules/logout/slice'
import {reducer as changePass} from './modules/change_password/slice'
// eslint-disable-next-line @typescript-eslint/no-unused-vars

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  baconipsum,
  evel,
  jsonPlaceholder,
  signUp,
  login,
  app,
  me,
  logout,
  changePass,
};
