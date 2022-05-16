import { configureStore } from "@reduxjs/toolkit";
import groupsReducer from './groups';

export default configureStore({
    reducer: {
        groups: groupsReducer
    }
});