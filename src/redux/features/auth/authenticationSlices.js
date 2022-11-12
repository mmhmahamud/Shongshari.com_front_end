// all import

import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
    authenticated: false,
    userCredentials: {},
};

export const AuththenticationSlices = createSlice({
    name: "authentications",
    initialState,
    reducers: {
        userLoggedIn: (state, action) => {
            state.authenticated = action.payload.isauthenticated;
            state.userCredentials = action.payload.userCredentials;
        },
    },
});

export const { userLoggedIn } = AuththenticationSlices.actions;

export default AuththenticationSlices.reducer;
