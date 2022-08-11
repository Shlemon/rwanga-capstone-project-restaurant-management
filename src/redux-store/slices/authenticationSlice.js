import { createSlice } from "@reduxjs/toolkit/";

const authenticationSlice = createSlice({
    name: 'authentication',
    initialState: {
        isAuthenticated: false,
        role: '',
        userUid: '',
    },
    reducers: {
        login: (state) => {
            state.isAuthenticated = true;
            state.role = 'Administrator';
            console.log('Login Successful.');
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.role = '';
        },
    }
})

export const { login, logout } = authenticationSlice.actions;
export default authenticationSlice.reducer;