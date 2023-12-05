import { Dispatch } from "@reduxjs/toolkit";
import { actions } from "./cart.slice";

import { CartEntity } from "./cart.entity";
import { dispatchable } from "store/dispatchable";

export type Action = {
  type: string;
  payload?: any;
};

export const productAdd = dispatchable((item: CartEntity) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      dispatch(actions["cart/add"](item));
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

export const productDelete = dispatchable((id: number) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      dispatch(actions["cart/delete"](id));
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
