import { configureStore } from '@reduxjs/toolkit';
import chageBGColorSlice from './bgChangeSlice';
import counterSlice from "./conterSlice"


export const store = configureStore({
    reducer: {
        counter: counterSlice,
        colorBG: chageBGColorSlice
    },
})