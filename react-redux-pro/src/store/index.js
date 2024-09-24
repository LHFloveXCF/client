import { configureStore } from "@reduxjs/toolkit";
import counterReduce from "./modules/counterStore";
import channelReduce from './modules/channelStore'

const store = configureStore({
    reducer: {
        counter: counterReduce,
        channel: channelReduce
    }
})

export default store