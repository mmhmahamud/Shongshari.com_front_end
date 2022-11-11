// all import

import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
    authenticated: false,
    userCredentials: {},
};

export const AuthSlices = createSlice({
    name: "auth",
    initialState,
    reducers: {
        userLoggedIn: (state, action) => {
            state.authenticated = !state.authenticated;
            state.userCredentials = action.payload.userCredentials;
        },
    },
});

export const { userLoggedIn } = AuthSlices.actions;

export default AuthSlices.reducer;
