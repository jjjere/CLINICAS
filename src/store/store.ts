import { configureStore } from "@reduxjs/toolkit";

import { donadorReducer } from "../donors/slices/donadorSlice";

export const store = configureStore({
    reducer : { donadores: donadorReducer },
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch