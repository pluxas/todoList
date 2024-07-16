import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: 'light'
}

const Theme = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme: (state) => {
            state.mode = state.mode === 'light' ? 'dark' : 'light';
        }
    }
})

export const {changeTheme} = Theme.actions;
export const theme = Theme.reducer