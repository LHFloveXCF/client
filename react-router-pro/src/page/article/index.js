import { useNavigate } from "react-router-dom"
function Article() {
    const navigate = useNavigate()
    return (
        <div>文章页
            <div>
                <button onClick={() => navigate('/login')}>跳转到登录页</button>
                <br/>
                <button onClick={() => navigate('/login/1001')}>传递参数1001</button>
                <br/>
                <button onClick={() => navigate('/login?id=1001')}>传递参数1001第二种方式</button>
            </div>
        </div>
    )
}

export default Article