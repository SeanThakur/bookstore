import { Dispatch } from "@reduxjs/toolkit";
import { actions } from "./auth.slice";
import { dispatchable } from "../dispatchable";

export type Action = {
  type: string;
  payload?: any;
};

export const login = dispatchable(({ username }) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      dispatch(actions["auth/login"](username));
      localStorage.setItem("isLoggedIn", "true");
      return {
        success: true,
      };
    } catch (error) {
      return {
        success: false,
      };
    }
  };
});

export const logout = dispatchable(({ user }) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      dispatch(actions["auth/logout"](user));
      localStorage.removeItem("isLoggedIn");
      return {
        success: true,
      };
    } catch (error) {
      return {
        success: false,
      };
    }
  };
});
