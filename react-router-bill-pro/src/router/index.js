import Layout from "@/pages/Layout";
import Month from "@/pages/Month";
import Year from "@/pages/Year";
import Newpage from "@/pages/New";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "month",
                element: <Month/>
            },
            {
                path: "year",
                element: <Year/>
            }
        ]
    },
    {
        path: "/new",
        element: <Newpage/>
    }
])

export default router