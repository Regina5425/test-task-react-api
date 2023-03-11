import { configureStore } from "@reduxjs/toolkit";
import charReducer from "./charSlice";

export const store = configureStore({
  reducer: {
    char: charReducer,
  },
});
