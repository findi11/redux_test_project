import { reducer as baconipsum } from "./modules/baconipsum/slice";
import { reducer as evel } from "./modules/evel/slice";
import {reducer as jsonPlaceholder} from './modules/jsonPlaceholder/slice';
import {reducer as signUp} from './modules/singUp/slice';
import {reducer as login } from './modules/login/slice';
// eslint-disable-next-line @typescript-eslint/no-unused-vars

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  baconipsum,
  evel,
  jsonPlaceholder,
  signUp,
  login,
};
