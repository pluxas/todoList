import { configureStore } from "@reduxjs/toolkit";
import { theme } from "./themeSlice";
import { task } from "./addTodoSlice";
import { search } from "./searchTodoSlice";


const store = configureStore({
    reducer: {
        themes: theme,
        tasks: task,
        search: search
    },
    devTools: true
})

export default store;