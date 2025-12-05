import { combineReducers } from "redux";
import type { PayloadAction } from "@reduxjs/toolkit";

import { authReducer } from "@features/auth/store";

const combinedRootReducer = combineReducers({
  auth: authReducer,
});

function rootReducer(state: any, action: PayloadAction) {
  return combinedRootReducer(state, action);
}

export default rootReducer;
