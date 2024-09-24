
// 这是项目的根组件 app -> index.js -> public/index.html(root)
function DemoEvent() {
    // 调用方法
    const handClick = () => {
        console.log('button被点击了');
        
    }
// 传递事件
const handClick2 = (e) => {
    console.log('button被点击了' + e);
    
}
// 传递参数
const handClick3 = (name) => {
    console.log('button被点击了' + name);
    
}
// 传递参数和事件
const handClick4 = (name, e) => {
    console.log('button被点击了' + name + ' ' + e);
    
}

    return (
      <div className="App">
        <button onClick={handClick}>点我</button>
        <button onClick={() => handClick2('jack')}>点我</button>
        <button onClick={(e) => handClick3(e)}>点我</button>
        <button onClick={(e) => handClick4('jack', e)}>点我</button>
      </div>
    );
  }
  
  export default DemoEvent;
  