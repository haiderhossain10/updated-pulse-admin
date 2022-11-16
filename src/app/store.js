import { configureStore } from "@reduxjs/toolkit";
import loginSessionSlice from "../features/login-session/loginSessionSlice";
import rechargeHistorySlice from "../features/recharge-history/rechargeHistorySlice";

export const store = configureStore({
    reducer: {
        loginSession: loginSessionSlice,
        rechargeHistory: rechargeHistorySlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});
