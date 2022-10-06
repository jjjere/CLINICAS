import { configureStore } from "@reduxjs/toolkit";

import donadorReducer from "../features/donadorSlice";

export const store = configureStore({
    reducer : { donadores: donadorReducer },
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch