import { useState } from "react";

function useToogle2() {
    const [value, setValue] = useState(true)
    const toggle = () => {
        setValue(!value)
    }
    return {
        value,
        toggle
    }
}
// 封装自定义Hook通用思路
// 1. 声明一个以use打头的函数；
// 2. 在函数体内封装可复用的逻辑；
// 3. 把组件中用到的状态或者回调return出去（以对象或者数组）；
// 4. 在哪个组件中要用这个逻辑，就执行这个函数，解构出来状态和回调进行使用。

function Parent() {

    const {value, toggle} = useToogle2()

    return (
        <div className="App">
            {value && <div>this is div</div>}
            <button onClick={toggle}>toggle</button>
        </div>
    );
}

export default Parent;
