import { AuthState } from "./auth.entity";

const authReducers = {
  "auth/login": (state: AuthState) => {
    state.auth.isAuth = true;
  },
  "auth/logout": (state: AuthState) => {
    state.auth.isAuth = false;
  },
};

export default authReducers;
