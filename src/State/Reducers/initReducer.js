import {createSlice} from '@reduxjs/toolkit';

const initSlice = createSlice({
    name : 'initialSlice',
    initialState : {
        value : 0,
    },

    reducers : {
        increment : (state) =>{
            state.value++;
        },

        decrement : (state) =>{
            state.value--;
        },

        setValue : (state, action) =>{
            state.value = action.payload;
        }
    }
})

export const {increment, decrement, setValue} = initSlice.actions;

export default initSlice.reducer;