import {configureStore} from '@reduxjs/toolkit'
import billReducer from './modules/billListStore'

const store = configureStore({
   reducer : {
        bills: billReducer
    }
})

export default store