import { Button } from 'flowbite-react'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import DarkModeToggle from './DarkModeToggle'


export default function Layout() {

    return (
    <>
        <header className="bg-blue-500 text-black  dark:bg-black dark:text-stone-50 first:text-lg font-semibold underline underline-offset-2 gap-4 flex items-center p-5">
            <Link to="/">Home</Link>
            <Link to="/mortgagecalculator">Mortgage Calculator</Link>
            <Link to="/todowrapper">Todo List</Link>
            <Link to="/contact">Contact </Link>
            <DarkModeToggle />
            
            
           
                        

            
          
     

        </header>
       
        <div>
            <Outlet/>
        </div>
    </>
  )
}
