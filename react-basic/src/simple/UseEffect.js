import { useState } from "react"
// 1. 引入useEffect函数
import { useEffect } from "react";

const url = 'https://www.baidu.com/'

function Son() {
    return <button>click me ; </button>
}
function Parent() {
    useEffect(() => {
        async function getList() {
          const result = await fetch(url)  
          console.log(result);
        } 
        getList()
    }, [])
    return (
        <div className="App">
            <Son />
        </div>
    );
}

export default Parent;
