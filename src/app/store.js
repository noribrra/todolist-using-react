import { configureStore } from "@reduxjs/toolkit";
import calcreduser from "../features/calcs/calcsSlice";

export const store = configureStore({
  reducer: {
    calc: calcreduser,
  },
});
