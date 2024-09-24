// 1. 自定义组件

import { createContext, useContext, useState } from "react"

// 1. 定义Context对象
const MsgContext = createContext()

function B() {
    // 3. 使用useContext获取数据
    const msg = useContext(MsgContext)
    return <button>click me ; {msg}</button>
}

function A() {
    return (<div>
        <B/>
    </div>)
}

// 这是项目的根组件 app -> index.js -> public/index.html(root)
function Parent() {
    const name = 'this is parent app'
    return (
        <div className="App">
            <MsgContext.Provider value={name}>
                <A />
            </MsgContext.Provider>

        </div>
    );
}

export default Parent;
