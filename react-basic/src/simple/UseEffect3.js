import { useState } from "react"
// 1. 引入useEffect函数
import { useEffect } from "react";

function Son() {
    return <button>click me ; </button>
}
function Parent() {
    const [show, setShow] = useState(true)


    return (
        <div className="App">
            {show && <Son />}
            <button onClick={() => setShow(false)}>卸载son组件</button>
        </div>
    );
}

export default Parent;
