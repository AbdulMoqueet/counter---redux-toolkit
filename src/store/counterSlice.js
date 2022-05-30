import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: 0,
    reducers: {
        add(state, action){
           return state = state + action.payload
        },
        sub(state, action){
            console.log(state);
            return state = state - action.payload
        }
    }
})

export const {add, sub} = counterSlice.actions;
export default counterSlice.reducer