import React from 'react'
import NavBar from '../NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'

function HomeLayout() {
  return (
    <div className='flex flex-col min-h-screen'>
        <NavBar/>

        <main className='mt-16 overflow-y-auto min-h-full flex-1 '>
            <Outlet/>
        </main>
        

        <Footer/>

    </div>
  )
}

export default HomeLayout