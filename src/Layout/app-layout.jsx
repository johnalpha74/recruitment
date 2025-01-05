//import React from 'react'
import Header from '@/components/Header'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
    return (
        <div>
            <div className='grid-background'></div>
            <div>
            <main className='min-h-screen container'>
                <Header />
                <Outlet />
            </main>
            <div className='p-10 text-center bg-gray-800 mt-10'>Made by Aptiva Inspired Business</div>    
            
            </div>
            

        </div>
    )
}
export default AppLayout