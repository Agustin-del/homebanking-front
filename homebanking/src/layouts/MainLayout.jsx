import React from 'react'
import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'

export default function MainLayout({children}) {
  return (
    <>
      <div className="flex">
        <Header/> 
        <main className ="flex flex-col justify-center w-[70%]">
          {children}
        </main>
      </div>
      <Footer/>
    </>
  )
}
