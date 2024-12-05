import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { TodoResponse } from "../types/todos";

export const todosApi = createApi({
    reducerPath: "todosApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/" }),
    endpoints: (builder) => ({
        getTodos: builder.query<TodoResponse[], void>({
            query: () => "todos",
        }),
    }),
});

export const { useGetTodosQuery } = todosApi;
