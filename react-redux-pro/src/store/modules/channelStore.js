import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const channelStore = createSlice({
    name: 'channel',
    initialState: {
        channelList: []
    },
    reducers: {
        setChannels(state, action) {
            state.channelList = action.payload
        }
    }
})

const { setChannels } = channelStore.actions
const fetchChannelList = () => {
    return async (dispatch) => {
        const res = await axios.get('http://localhost:3004/channels')
        console.log(res);
        dispatch(setChannels(res.data))
    }
}


const reducer = channelStore.reducer

export { fetchChannelList }
export default reducer

