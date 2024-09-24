// 1. 自定义组件

import { useState } from "react"

// 调用父组件的函数，向父组件传递数据

function B({ name }) {
    return <button>click me ; {name}</button>
}

function A({ onGetMsg }) {
    const msg = 'this is son 33'
    return <button onClick={() => { onGetMsg(msg) }}>click me</button>
}

// 这是项目的根组件 app -> index.js -> public/index.html(root)
function Parent() {
    const [name, setName] = useState('')
    const getMsg = (msg) => {
        setName(msg)
    }
    return (
        <div className="App">
            <B name={name} /> {name}
            <br></br>
            {/**这里有固定的写法，必须以on打头，传递过去的就是这个名字 */}
            <A onGetMsg={getMsg} />
        </div>
    );
}

export default Parent;
