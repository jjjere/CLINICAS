import { congfigureStore } from "@reduxjs/toolkit";

import donadorReducer from "../features/tasls/tasksSlice";

export const store = congfigureStore({
    reducer : { tasks: donadorReducer },
});