import {createSlice} from "@reduxjs/toolkit";


export const CartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        add:() => {},
        remove:() => {},
    }
})