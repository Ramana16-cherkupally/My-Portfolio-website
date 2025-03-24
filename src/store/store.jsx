import { configureStore } from "@reduxjs/toolkit";
import { ItemSlice } from "./ItemsSlice";

export const store = configureStore({
  reducer: {
    Projects: ItemSlice.reducer,
  },
});
