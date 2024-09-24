import { useDispatch, useSelector } from "react-redux";
import {ins, des, addToNum} from './store/modules/counterStore'
import { fetchChannelList } from "./store/modules/channelStore";
import { useEffect } from "react";

function App() {
  const {count} = useSelector((state) => state.counter)
  const {channelList} = useSelector((state) => state.channel)
  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(fetchChannelList())
  }, [dispatch])

  
  return (
    <div className="App">
      <button onClick={() => dispatch(des())}>-</button>
     {count}
     <button onClick={() => dispatch(ins())}>+</button>
     <button onClick={() => dispatch(addToNum(10))}>addToNum 10</button>
     <button onClick={() => dispatch(addToNum(20))}>addToNum 20</button>

     <ul>
      {channelList.map(item => <li key={item.id}>{item.name}</li>)}
     </ul>
    </div>
  );
}

export default App;
