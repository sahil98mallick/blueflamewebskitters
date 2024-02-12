import Axiosinstance from "@/api/axiosinstance/Axiosinstane";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import React, { useState } from "react"

const initialState = {
    user: null,
    token: null,
    loading: false
}


export const loginprocess = createAsyncThunk(
    'auth/login',
    async (logindata) => {
        try {
            const response = await Axiosinstance.post('login', logindata)
            return response?.data
        } catch (error) {
            console.log(error);
        }
    }
)
const AuthSlice = createSlice({
    name: "authslice",
    initialState,
    reducers: {
        logoutUser: (state, { payload }) => {
            state.user = null;
            state.token = null;
            localStorage.removeItem("token");
            localStorage.removeItem("UserDetails");
        },
    },
    extraReducers: ((builder) => {
        builder.addCase(loginprocess.pending, (state, action) => {
            state.loading = true
        });
        builder.addCase(loginprocess.fulfilled, (state, action) => {
            state.loading = false;
            if (action.payload.status) {
                state.user = action.payload?.user;
                state.token = action.payload?.jwt
                console.log("Token is:-", state.token);

            }
        });
        builder.addCase(loginprocess.rejected, (state, action) => {
            state.loading = false
        });
    })
})

export const { logoutUser } = AuthSlice.actions;
export default AuthSlice.reducer