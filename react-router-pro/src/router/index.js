import { createBrowserRouter } from 'react-router-dom'
import Article from '../page/article'
import Login from '../page/login'
import Layout from '../page/layout'
import Board from '../page/board'
import About from '../page/about'
import Detail from '../page/detail'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: '/board',
                element: <Board/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                index: true,
                element: <Detail/>
            }
        ]
    },
    {
        path: "/article",
        element: <Article />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/login/:id",
        element: <Login />
    }
])

export default router