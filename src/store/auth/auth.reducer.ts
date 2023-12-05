import { PayloadAction } from "@reduxjs/toolkit";
import { AuthEntity, AuthState } from "./auth.entity";

const authReducers = {
  "auth/login": (state: AuthState, action: PayloadAction<AuthEntity>) => {
    state.auth.isAuth = true;
  },
  "auth/logout": (state: AuthState, action: PayloadAction<AuthEntity>) => {
    state.auth.isAuth = false;
  },
};

export default authReducers;
