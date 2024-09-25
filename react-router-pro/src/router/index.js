import { createBrowserRouter } from 'react-router-dom'
import Article from '../page/article'
import Login from '../page/login'

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>首页</div>
    },
    {
        path: "/article",
        element: <Article />
    },
    {
        path: "/login",
        element: <Login />
    }
])

export default router