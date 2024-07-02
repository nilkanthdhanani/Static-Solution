import React from 'react'
import Header from '../commen/header'
import Footer from '../commen/footer'
import { Outlet } from 'react-router-dom'
import ScrollProgress from '../scrollProgress'

export default function DefaultLayout() {
    return (
        <>
            <Header />
            <ScrollProgress />
            <Outlet />
            <Footer />
        </>
    )
}
