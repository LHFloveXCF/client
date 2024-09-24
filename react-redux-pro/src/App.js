import { useDispatch, useSelector } from "react-redux";
import {ins, des, addToNum} from './store/modules/counterStore'

function App() {
  const {count} = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <button onClick={() => dispatch(des())}>-</button>
     {count}
     <button onClick={() => dispatch(ins())}>+</button>
     <button onClick={() => dispatch(addToNum(10))}>addToNum 10</button>
     <button onClick={() => dispatch(addToNum(20))}>addToNum 20</button>
    </div>
  );
}

export default App;
