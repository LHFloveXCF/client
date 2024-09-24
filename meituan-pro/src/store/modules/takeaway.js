import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const foodStore = createSlice({
    name: 'food',
    actIndex: 0,
    initialState: {
        foodsList: [],
        cartList: []
    },

    reducers: {
        setFoods(state, action) {
            state.foodsList = action.payload
        },
        setActIndex(state, action) {
            state.actIndex = action.payload
        },
        addCart(state, action) {
            const food = state.cartList.find(item => item.id === action.payload.id)
            if (food){
                food.count++
            } else {
                state.cartList.push(action.payload)
            }
        }
    }

})

const { setFoods, setActIndex , addCart} = foodStore.actions

const fetchFoods = () => {
    return async (dispatch) => {
        const res = await axios.get('http://localhost:3004/takeaway')
        dispatch(setFoods(res.data))
    }
}

export { fetchFoods, setActIndex, addCart }

const reducer = foodStore.reducer
export default reducer