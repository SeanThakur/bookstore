import { booksType } from "typings/dtos";

export interface CartEntity extends booksType {
  qty: number;
}

export interface CartState {
  cart: CartEntity[];
}
