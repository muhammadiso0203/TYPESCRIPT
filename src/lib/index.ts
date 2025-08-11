import { configureStore } from "@reduxjs/toolkit";
import cart from "./features/cartSlice";
import like from "./features/wishlistSlice";

export const store = configureStore({
  reducer: {
    cart,
    like,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
