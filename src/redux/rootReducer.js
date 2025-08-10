import { combineReducers } from "@reduxjs/toolkit";
import { likesReducer } from "./likesReducer";
import { inputReducer } from "./inputReducer";
import { commentsReducer } from "./commentsReducer";
import { formReducer } from "./formReducer";
import { appReducer } from "./appReducer";


// объединяем все редьюсеры
export const rootReducer = combineReducers({
    likesReducer,
    inputReducer,
    commentsReducer,
    formReducer,
    appReducer
})