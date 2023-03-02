import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./reducer";


const Store=configureStore({
    reducer:{cartReducer},
})
export default Store;