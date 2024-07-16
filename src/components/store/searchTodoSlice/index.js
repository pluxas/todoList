import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchTodo: '',
    users: [],
    isLoading: true,
    filteredUsers: []
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        userSuccess: (state, action) => {
            state.users = action.payload;
            state.isLoading = false;
        },
        searchByName: (state, action) => {
            return {
                ...state.users,
                users: [...state.users].filter((user) => user.tolowerCase().includes(action.payload.tolowerCase()))
            }
        }
    },
})

export const { userSuccess, searchByName } = searchSlice.actions

export const search = searchSlice.reducer