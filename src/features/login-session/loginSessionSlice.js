import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    table: [
        {
            id: 1,
            pdo: {
                pdoName: "Ummah Store",
                pdoCode: "WB0988977",
            },
            deviceInfo: {
                deviceName: "IPhone 12 Pro",
                deviceMac: "AA:BB:CC:DD:FF",
            },
            stated: {
                date: 1668394906766,
                time: 1668394906766,
            },
            closeAt: {
                date: 1668395187613,
                time: 1668395187613,
            },
            duration: {
                duration: "12",
                meridiem: "Am",
            },
            dataUsed: {
                size: "56.78",
                measured: "MB",
            },
            color: "#F0ECFF",
        },
        {
            id: 2,
            pdo: {
                pdoName: "Haider",
                pdoCode: "W90988677",
            },
            deviceInfo: {
                deviceName: "Tecno 7 spark pro",
                deviceMac: "AA:BB:CC:DD:CA",
            },
            stated: {
                date: 1668395255169,
                time: 1668395255169,
            },
            closeAt: {
                date: 1668395262311,
                time: 1668395262311,
            },
            duration: {
                duration: "09",
                meridiem: "Am",
            },
            dataUsed: {
                size: "45",
                measured: "MB",
            },
            color: "#FEF3F0",
        },
        {
            id: 3,
            pdo: {
                pdoName: "Rakib",
                pdoCode: "W90988677",
            },
            deviceInfo: {
                deviceName: "Redmi 9",
                deviceMac: "AA:CJ:CC:DD:CA",
            },
            stated: {
                date: 1668395336613,
                time: 1668395336613,
            },
            closeAt: {
                date: 1668395343615,
                time: 1668395343615,
            },
            duration: {
                duration: "11",
                meridiem: "Am",
            },
            dataUsed: {
                size: "38",
                measured: "MB",
            },
            color: "#E0F9FF",
        },
    ],
};
export const loginSessionSlice = createSlice({
    name: "login-session",
    initialState,
    reducers: {},
});

export const {} = loginSessionSlice.actions;

export default loginSessionSlice.reducer;
