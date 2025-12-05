import { createAction } from "@reduxjs/toolkit";
import { Login } from "../entities/login";

export const authActions = {
  signInAsGuest: createAction<{ dataSession: Login | undefined }>(
    "loginGuest/auth",
  ),
};
