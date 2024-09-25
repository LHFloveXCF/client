import { Link } from "react-router-dom"
function Login() {
    return (
        <div>登录页
            <Link to={'/article'}>跳转到文章页</Link>
        </div>
    )
}

export default Login