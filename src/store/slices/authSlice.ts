import type { authType } from "@/types/authType";
import { createSlice } from "@reduxjs/toolkit";

const initialState: authType = {
  token: "",
  isLoggedIn: false,
  username: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.username = action.payload.username;
    },
    logout: (state, action) => {
      state.isLoggedIn = false;
      state.token = "";
      state.username = "";
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
