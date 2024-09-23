import { configureStore } from "@reduxjs/toolkit";
import counterReduce from "./modules/counterStore";

const store = configureStore({
    reducer: {
        counter: counterReduce
    }
})

export default store