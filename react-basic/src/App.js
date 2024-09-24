// 1. 自定义组件
function Button () {
  return <button>click me</button>
}

// 这是项目的根组件 app -> index.js -> public/index.html(root)
function App() {
  return (
    <div className="App">
      this is App
      {/**使用组件 */}
      {/** 1.1 自闭和 */}
      <Button/>
      {/** 1.2 成对出现 */}
      <Button></Button>
    </div>
  );
}

export default App;
