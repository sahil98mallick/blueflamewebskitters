import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../AuthSlice/AuthSlice";

export const Store = configureStore({
    reducer: {
        Auth: AuthSlice,
    }
})