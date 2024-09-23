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
        }
    }
}
)

const {ins, des } = counterStore.actions
const reducer = counterStore.reducer

export {ins, des}
export default reducer