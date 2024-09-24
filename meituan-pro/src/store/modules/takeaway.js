import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const foodStore = createSlice({
    name: 'food',
    initialState: {
        foodsList: []
    },

    reducers: {
        setFoods(state, action) {
            state.foodsList = action.payload
        }
    }

})

const { setFoods } = foodStore.actions

const fetchFoods = () => {
    return async (dispatch) => {
        const res = await axios.get('http://localhost:3004/takeaway')
        dispatch(setFoods(res.data))
    }
}

export { fetchFoods }

const reducer = foodStore.reducer
export default reducer