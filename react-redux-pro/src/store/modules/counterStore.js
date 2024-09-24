import {createSlice} from '@reduxjs/toolkit'

const counterStore = createSlice( {
    name: 'counter',
    initialState: {
        count: 0
    },
    reducers: {
        ins(state) {
            state.count++
        },
        des(state) {
            state.count--
        },
        addToNum(state, action) {
            state.count = action.payload
        }
    
    }
}
)

const {ins, des, addToNum } = counterStore.actions
const reducer = counterStore.reducer

export {ins, des, addToNum}
export default reducer