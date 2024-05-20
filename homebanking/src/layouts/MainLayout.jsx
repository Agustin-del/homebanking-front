import React from 'react'
import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'

export default function MainLayout({children}) {
  return (
    <>
      <div className="flex">
        <Header/> 
        <main className ="flex flex-col w-[70%] bg-blue-200 p-4 items-center justify-evenly">
          {children}
        </main>
      </div>
      <Footer/>
    </>
  )
}
