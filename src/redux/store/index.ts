import { configureStore } from "@reduxjs/toolkit";
import elementSlice from "../slices/elementSlice";

export const store = configureStore({
  reducer: {
    elements: elementSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
