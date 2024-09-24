const list = [
    { id: 1, name: 'zs' },
    { id: 2, name: 'ls' },
    { id: 3, name: 'ww' }
]

function JsxList() {
    return (
        <div className="JsxList">
            <ul>
                {/**渲染列表 */}
                {list.map(item => <li key={item.id}>{item.name}</li>)}
            </ul>
        </div>
    );
}

export default JsxList;