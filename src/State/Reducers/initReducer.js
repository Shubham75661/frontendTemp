import {createSlice} from '@reduxjs/toolkit';

const initSlice = createSlice({
    name : 'initialSlice',
    initialState : {
        value : 0,
    },

    reducers : {
        view : (state) =>{
            state.value--;
        }
    }
})

export const {view} = initSlice.actions;

export default initSlice.reducer;