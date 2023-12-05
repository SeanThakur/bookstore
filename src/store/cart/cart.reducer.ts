import { PayloadAction } from "@reduxjs/toolkit";
import { CartEntity, CartState } from "./cart.entity";

const cartReducers = {
  "cart/add": (state: CartState, action: PayloadAction<CartEntity>) => {
    const existingItem = state.cart.find(
      (item) => Number(item.id) === Number(action.payload.id)
    );
    if (!existingItem) {
      state.cart.push({ ...action.payload, qty: 1 });
    } else {
      if (existingItem.qty) {
        existingItem.qty++;
      }
    }
  },
  "cart/delete": (state: CartState, action: PayloadAction<number>) => {
    const index = state.cart.findIndex((item) => item.id === action.payload);
    if (index !== -1) {
      if (state.cart[index].qty && state.cart[index].qty > 1) {
        state.cart[index].qty--;
      } else {
        state.cart.splice(index, 1);
      }
    }
  },
};

export default cartReducers;
