import { Link, Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <div>
            主页
            <br/>
            <Link to={'/board'}>面板</Link>
            <br/>
            <Link to={'/about'}>关于</Link>
            <br/>
            {/**配置二级路由出口 */}
            <Outlet/>
        </div>
    )
}

export default Layout