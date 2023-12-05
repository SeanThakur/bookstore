import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "./auth.entity";
import authReducer from "./auth.reducer";

const isLoggedIn = localStorage.getItem("isLoggedIn");

export const initialState: AuthState = {
  auth: {
    isAuth: isLoggedIn ? true : false,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: authReducer,
});

export const { actions, reducer } = authSlice;
