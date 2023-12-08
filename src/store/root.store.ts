import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { cartActions, cartReducer } from "./cart";
import { authActions, authReducer } from "./auth";

export const actions = {
  cart: cartActions,
  auth: authActions,
};

const reducers = {
  cart: cartReducer,
  auth: authReducer,
};

export const store = configureStore({
  reducer: reducers,
  devTools: false,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
