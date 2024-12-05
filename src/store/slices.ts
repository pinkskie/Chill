import { createSlice } from "@reduxjs/toolkit";

const slices = createSlice({
    name: "slices",
    initialState: {
        todos: [],
    },
    reducers: {
        setTodos: (state, action) => {
            state.todos = action.payload;
        },
    },
});

export const { setTodos } = slices.actions;
export default slices.reducer;
