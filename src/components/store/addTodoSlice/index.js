import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    task: [],
}

const Task = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.task.push(action.payload);
        },  
        deleteTask: (state, action) => {
            state.task = state.task.filter(todo => todo !== action.payload)
        }
    }
})


export const {addTask, deleteTask} = Task.actions
export const task = Task.reducer