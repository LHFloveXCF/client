// jsx条件渲染 逻辑与 && 三目运算符 ?:
// 复杂的条件渲染
const articleType = 1 // 文章类型 0 1 2 无图、一张图、两张图
const isLogin = false

function getArticleType() {
    if (articleType === 0) {
        return <span>无图</span>
    } else if (articleType === 1) {
        return <span>一张图</span>
    } else if (articleType === 2) {
        return <span>两张图</span>
    }
}

function JsxCondition() {
    return (
        <div className="JsxCondition">
            {isLogin && <span>我是一个span</span>}
            {isLogin ? <span>jack</span> : <span>loading...</span>}
            {getArticleType()}
        </div>
    )
}

export default JsxCondition;