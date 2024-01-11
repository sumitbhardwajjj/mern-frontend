import {createSlice} from '@reduxjs/toolkit'

const INITIAL_STATE = []

const cartSlice = createSlice({

    name:"Cart",
    initialState:INITIAL_STATE,
    reducers:{
        addToCart:(state,action)=>{
            state.push(action.payload)
        }
    }

})

export const {addToCart} = cartSlice.actions;

export default cartSlice.reducer