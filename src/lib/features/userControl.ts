import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IUser } from "../../types";

interface userControlSlice {
  value: IUser[];
  editing: IUser | null;
}

const initialState: userControlSlice = {
  value: [],
  editing: null,
};

export const userControlSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    create: (state, actions: PayloadAction<IUser>) => {
      state.value.push(actions.payload);
    },
    update: (state, actions: PayloadAction<IUser>) => {
      state.value = state.value.map((user) =>
        user.id === actions.payload.id ? { ...user, ...actions.payload } : user
      );
    },
    remove: (state, actions: PayloadAction<number>) => {
      state.value = state.value.filter((user) => user.id !== actions.payload);
    },
    editing: (state, actions: PayloadAction<IUser | null>) => {
      state.editing = actions.payload;
    },
  },
});

export const { create, remove, update, editing } = userControlSlice.actions;
export default userControlSlice.reducer;
