import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
    return (
        <div>

            <center>
                <h1>Admin Panel</h1>
                <Outlet/>


                

            </center>
        </div>
    )
}

export default AdminLayout
