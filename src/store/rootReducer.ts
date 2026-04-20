import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";

export const rootReducer = combineReducers({
  auth: authSlice,
});
export type RootState = ReturnType<typeof rootReducer>;
