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
        },
        onPlus(state, action) {
            const food = state.cartList.find(item => item.id === action.payload.id)
            if (food) {
                food.count++
            }
        },
        onMinus(state, action) {
            const food = state.cartList.find(item => item.id === action.payload.id)
            if (food && food.count > 0) {
                food.count--

                if (food.count == 0) {
                    state.cartList.pop(food)
                }
            }
        },
        clearCart(state, action) {
            state.cartList = []
        }

    }

})

const { setFoods, setActIndex , addCart, onPlus, onMinus, clearCart} = foodStore.actions

const fetchFoods = () => {
    return async (dispatch) => {
        const res = await axios.get('http://localhost:3004/takeaway')
        dispatch(setFoods(res.data))
    }
}

export { fetchFoods, setActIndex, addCart, onPlus, onMinus, clearCart }

const reducer = foodStore.reducer
export default reducer