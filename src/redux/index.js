import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'
import cartReducer from './cart/reducer';
import userReducer from './user/userSlice';

const rootReducer = combineReducers({
    cart: cartReducer,
    user: userReducer
});

const persistConfig = {
    key: 'root',
    storage,
  }

  const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    devTools: true
})

export const persistor = persistStore(store)