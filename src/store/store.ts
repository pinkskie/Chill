import { configureStore } from "@reduxjs/toolkit";

import { todosApi } from "./services/todos";
import slicesReducer from "./slices";

export const store = configureStore({
    reducer: {
        [todosApi.reducerPath]: todosApi.reducer,
        slices: slicesReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todosApi.middleware),
});
