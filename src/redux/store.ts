import { configureStore } from "@reduxjs/toolkit";
import resolutionReducer from "./slice/resolution";
import favoriteReducer from "./slice/favoriteResolution"
const store = configureStore({
    reducer : {resolution : resolutionReducer, favorite: favoriteReducer},
});

export type RootState = ReturnType<typeof store.getState>;

export default store;