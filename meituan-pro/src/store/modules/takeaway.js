import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const foodStore = createSlice({
    name: 'food',
    initialState: {
        foodsList: [],
        actIndex: 0
    },

    reducers: {
        setFoods(state, action) {
            state.foodsList = action.payload
        },
        setActIndex(state, action) {
            state.actIndex = action.payload
        }
    }

})

const { setFoods, setActIndex } = foodStore.actions

const fetchFoods = () => {
    return async (dispatch) => {
        const res = await axios.get('http://localhost:3004/takeaway')
        dispatch(setFoods(res.data))
    }
}

export { fetchFoods, setActIndex }

const reducer = foodStore.reducer
export default reducer