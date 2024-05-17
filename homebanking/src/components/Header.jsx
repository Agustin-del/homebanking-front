import React from 'react'
import Navigator from './Navigator.jsx'

export default function Header() {
  return (
      <> 
        <header className="w-[30%] bg-blue-100 min-h-[88vh] flex flex-col gap-10 lg:gap-0 p-4"> 
            <img className="h-[38px] object-cover lg:h-[80px] lg:object-fill" src="/logo.png"/>
            <Navigator/>
        </header>
      </>
  )
}

