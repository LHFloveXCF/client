import { useState } from "react";

function UseState() {

    let [count, setCount] = useState(0)

    const onClick2 = () => {
        count++
        console.log(count);
    }

    const onClick1 = () => {
        setCount(count++)
    }

    let [form, setForm] = useState({name: 'jack'})
    const onClick3 = () => {
        setForm({
            ...form,
            name: 'rose'
        })
    }

    return (
        <div className="App">
            <button onClick = {onClick2}>{count}</button>
            <button onClick = {onClick1}>{count}</button>
            <button onClick = {onClick3}>{form.name}</button>
        </div>
    );
}

export default UseState;
