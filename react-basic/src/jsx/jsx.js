{/**jsx的应用场景、领域 */}
const count = 1

function getName() {
    return '我是一个方法'
}

function JsxTest() {
    return (
        <div className="Jsx">
            this is Jsx <br></br>
            {/** Jsx可以用来引用字符串*/}
            {'this is a message'}<br></br>
            {/** Jsx可以用来使用变量*/}
            {count}<br></br>
            {/** Jsx可以用来调用方法*/}
            {getName()}<br></br>
            {/** Jsx可以用来调用函数*/}
            {new Date().getDate()} <br></br>
            {/** Jsx可以用来调用js对象*/}
            {<div color='red'>我是一个div</div>}

        </div>
    );
}

export default JsxTest;
