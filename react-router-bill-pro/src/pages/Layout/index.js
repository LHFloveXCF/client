import { getBillList } from "@/store/modules/billListStore"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Outlet } from "react-router-dom"

const Layout = () => {
    
    const { billList } = useSelector((state) => state.bills)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getBillList())
    }, [dispatch])

    return (
        <div>
            <Outlet />
            layout
        </div>
    )
}

export default Layout