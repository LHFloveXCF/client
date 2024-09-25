import { createBrowserRouter } from 'react-router-dom'
import Article from '../page/article'
import Login from '../page/login'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Article/>
  },
  {
    path: "/login",
    element: <Login/>
  }
])

export default router