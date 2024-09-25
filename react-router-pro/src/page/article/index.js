import { useNavigate } from "react-router-dom"
function Article() {
    const navigate = useNavigate()
    return (
        <div>文章页
            <div>
                <button onClick={() => navigate('/login')}>跳转到登录页</button>
            </div>
        </div>
    )
}

export default Article