import { configureStore } from "@reduxjs/toolkit";
import carrtReducer from "./cart";

export const store = configureStore({
  reducer: {
    cart: carrtReducer,
  },
});
