import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    hamburger: false,
};

export const toggleSlice = createSlice({
    name: "toggle",
    initialState,
    reducers: {
        hamburgerToggle: (state) => {
            state.hamburger = !state.hamburger;
        },
    },
});

export const { hamburgerToggle } = toggleSlice.actions;
export default toggleSlice.reducer;
