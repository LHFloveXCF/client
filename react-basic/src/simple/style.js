import '../index.css'

const style = {
    color: 'blue',
    fontSize: '50px'
}

function Style() {
    return (
        <div className="App">
            {/**行内样式 */}
            <span style = {{color: 'red'}}>this is span</span>
            <br/>
            <span style = {style}>this is span</span>
            <br/>
            {/**通过class类名控制 */}
            <span className = 'foo'>this is span</span>
        </div>
    );
}

export default Style;
