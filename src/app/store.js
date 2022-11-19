import { configureStore } from "@reduxjs/toolkit";
import loginSessionSlice from "../features/login-session/loginSessionSlice";
import rechargeHistorySlice from "../features/recharge-history/rechargeHistorySlice";
import toggleSlice from "../features/toggle/toggleSlice";

export const store = configureStore({
    reducer: {
        loginSession: loginSessionSlice,
        rechargeHistory: rechargeHistorySlice,
        toggle: toggleSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});
