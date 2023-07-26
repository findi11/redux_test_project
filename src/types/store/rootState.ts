import { JsonPlaceholderState } from "../../store/modules/jsonPlaceholder/types";
import { BaconipsumState } from "../../store/modules/baconipsum/types";
import { EvelState } from "../../store/modules/evel/types";
import { SignUpState } from "../../store/modules/singUp/types";
import { LoginState } from "../../store/modules/login/types";
import { AppState } from "../../store/modules/app/types";
import { MeState } from "../../store/modules/me/types";
import { LogoutState } from "../../store/modules/logout/types";
import { changePass } from "../../store/modules/change_password/types";


export interface RootState {
    app: AppState;
    baconipsum: BaconipsumState;
    evel: EvelState;
    jsonPlaceholder: JsonPlaceholderState;
    singUp: SignUpState;
    login: LoginState;
    me: MeState; 
    logout: LogoutState;
    changePass :changePass;
}
