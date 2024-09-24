import { useState } from "react";

// 这是项目的根组件 app -> index.js -> public/index.html(root)
function Bind() {
    const [value, setValue] = useState('')
    const changeValue = (e) => {
        setValue(e)
    }
    return (
        <div className="App">
            <input value={value} onChange={(e) => changeValue(e.target.value)}></input>
        </div>
    );
}

export default Bind;
