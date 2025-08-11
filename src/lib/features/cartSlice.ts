import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ICartProduct } from "../../types";

interface ICart {
  value: ICartProduct[];
}

const initialState: ICart = {
  value: JSON.parse(localStorage.getItem("cart") || "[]") || [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, actions: PayloadAction<ICartProduct>) => {
      const index = state.value.findIndex(
        (item) => item.id === actions.payload.id
      );
      if (index < 0) {
        state.value.push({ ...actions.payload, amount: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
    removeItem: (state, actions: PayloadAction<ICartProduct>) => {
      const index = state.value.findIndex(
        (item) => item.id === actions.payload.id
      );
      state.value.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
    inrementAmount: (state, actions: PayloadAction<ICartProduct>) => {
      state.value = state.value.map((item) =>
        item.id === actions.payload.id
          ? { ...item, amount: item.amount + 1 }
          : item
      );
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
    decrementAmount: (state, actions: PayloadAction<ICartProduct>) => {
      state.value = state.value.map((item) =>
        item.id === actions.payload.id
          ? { ...item, amount: item.amount - 1 }
          : item
      );
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
    clearAll: (state) => {
      {
        state.value = [];
        localStorage.setItem("cart", JSON.stringify(state.value));
      }
    },
  },
});

export const {
  addItem,
  clearAll,
  decrementAmount,
  inrementAmount,
  removeItem,
} = cartSlice.actions;
export default cartSlice.reducer;
