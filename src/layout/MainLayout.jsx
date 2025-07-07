import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

function MainLayout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>

        </>
    )
}

export default MainLayout