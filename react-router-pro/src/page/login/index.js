import { Link, useParams, useSearchParams } from "react-router-dom"
function Login() {
    const params = useParams()
    let id = params.id

    const [params2] = useSearchParams()
    let id2 = params2.get('id')
    return (
        <div>登录页
            <Link to={'/article'}>跳转到文章页</Link>
            <br/>
            {id}
            <br/>
            {id2}
        </div>
    )
}

export default Login