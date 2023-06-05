import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import TaskSliceReducers from "./Slice/TaskSlice";
import ContactSliceReducers from './Slice/ContactSlice'
import HeaderHeadingSliceReducers from "./Slice/HeaderHeadingSlice";

const rootReducer= combineReducers({
    task:TaskSliceReducers,
    contact:ContactSliceReducers,
    headerHeading:HeaderHeadingSliceReducers,
})

export const store = configureStore({
    reducer:rootReducer,
    middleware:getDefaultMiddleware=>
    getDefaultMiddleware({
        serializableCheck: false,
      }),
})