import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className='bg-zinc-900 h-screen text-zinc-500'>
        <Navbar />
        <Outlet />
    </div>
  )
}

export default Layout