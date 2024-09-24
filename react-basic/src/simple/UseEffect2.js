import { useState } from "react"
// 1. 引入useEffect函数
import { useEffect } from "react";
function Parent() {
    const [count, setCount] = useState(0)
    // 1. 没有依赖，初始化和组件更新都会被执行
    // useEffect(() => {
    // })

    // 2. 空数组依赖，初始化被执行
    // useEffect(() => {
    //     console.log('被执行了');

    // }, [])
    // 传入特定依赖，初始化和特定依赖发生变化时，都会执行
    useEffect(() => {
        console.log('被执行了');

    }, [count])
    return (
        <div className="App">
            <input value={`函数被执行了: ${count} 次`}></input>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    );
}

export default Parent;
