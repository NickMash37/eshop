import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cart/reducer';
import userReducer from './user/userSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        user: userReducer
    },
    devTools: true
})