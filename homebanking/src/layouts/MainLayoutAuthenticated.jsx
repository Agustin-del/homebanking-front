import React from 'react'
import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'

export default function MainLayoutAuthenticated({handleLogOut, children}) {
  return (
    <>
      <div className="flex">
        <Header/> 
        <main className =" min-h-[120vh] shadow-lg flex flex-col w-[80%] lg:w-[70%] bg-gray-100 p-4 items-center justify-evenly">
          {children}
        </main>
      </div>
      <Footer/>
    </>
  )
}
