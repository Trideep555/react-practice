import { configureStore } from "@reduxjs/toolkit";
import Notes from "../Features/Notes";
export  const   Store=configureStore({
    reducer: Notes
    ,
    
})