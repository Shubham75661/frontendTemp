import {configureStore} from '@reduxjs/toolkit';
import initReducer from './Reducers/initReducer';

export const store = configureStore({
    reducer : {
        init : initReducer,
    }
})
