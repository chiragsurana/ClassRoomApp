import { configureStore } from "@reduxjs/toolkit";
import classSliceReducer from "./classSlice";


export default configureStore ({
    reducer: classSliceReducer,
    
})