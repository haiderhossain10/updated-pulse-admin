import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    table: [
        {
            id: 1,
            plane: {
                name: "Basic Plane",
                date: 1668409392085,
                txn: "WI9853425",
            },
            price: "99",
            validTill: 1668409453809,
            status: "success",
        },
        {
            id: 2,
            plane: {
                name: "Intermediate Plane",
                date: 1668409527291,
                txn: "WI9853425",
            },
            price: "99",
            validTill: 1668409534750,
            status: "failed",
        },
        {
            id: 3,
            plane: {
                name: "Advanced Plane",
                date: 1668409575177,
                txn: "WI9853425",
            },
            price: "99",
            validTill: 1668409575177,
            status: "pending",
        },
    ],
};
export const rechargeHistorySlice = createSlice({
    name: "recharge-history",
    initialState,
    reducers: {},
});

export const {} = rechargeHistorySlice.actions;

export default rechargeHistorySlice.reducer;
