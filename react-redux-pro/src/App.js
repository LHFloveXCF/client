import { useDispatch, useSelector } from "react-redux";
import {ins, des} from './store/modules/counterStore'

function App() {
  const {count} = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <button onClick={() => dispatch(des())}>-</button>
     {count}
     <button onClick={() => dispatch(ins())}>+</button>
    </div>
  );
}

export default App;
