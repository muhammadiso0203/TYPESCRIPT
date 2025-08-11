import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IProduct } from "../../types";

interface IWishlist {
  data: IProduct[];
}

const initialState: IWishlist = {
  data: JSON.parse(localStorage.getItem("wishlist") || "[]") as IProduct[],
};

export const wishlistSlice = createSlice({
  name: "wishlist-1515",
  initialState,
  reducers: {
    toggleWishes: (state, action: PayloadAction<IProduct>) => {
      const index = state.data.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index < 0) {
        state.data.push(action.payload);
      } else {
        state.data.splice(index, 1);
      }
      localStorage.setItem("wishlist", JSON.stringify(state.data));
    },
  },
});

export const { toggleWishes } = wishlistSlice.actions;
export default wishlistSlice.reducer;
