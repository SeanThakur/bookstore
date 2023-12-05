import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "./auth.entity";
import authReducer from "./auth.reducer";

export const initialState: AuthState = {
  auth: {
    isAuth: false,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: authReducer,
});

export const { actions, reducer } = authSlice;
