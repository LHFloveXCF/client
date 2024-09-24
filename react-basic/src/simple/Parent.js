// 1. 自定义组件

import { useState } from "react"

// 调用父组件的函数，向父组件传递数据
function Son (props) {
    return <button>click me ; {props.name}</button>
  }
  

  function Son2 ({onGetMsg}) {
    const msg = 'this is son 33'
    return <button onClick={() => {onGetMsg(msg)}}>click me</button>
  }

  // 这是项目的根组件 app -> index.js -> public/index.html(root)
  function Parent() {
    const name = 'this is parent app'
    const getMsg = (msg) => {
        console.log(msg);
        setMsg(msg)
    }
    const [msg, setMsg] = useState('')
    return (
      <div className="App">
        <Son name={name}/>
        <br></br>
        <span>{msg}</span>
        {/**这里有固定的写法，必须以on打头，传递过去的就是这个名字 */}
        <Son2 onGetMsg = {getMsg}/>
      </div>
    );
  }
  
  export default Parent;
  