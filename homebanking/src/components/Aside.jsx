import React from 'react'
import Navigator from './Navigator'

export default function Aside() {
  return (
      <> 
        <aside className="w-[30%] bg-blue-100 h-[88vh] flex flex-col gap-10 p-4"> 
            <img className="h-[50px] object-contain" src="/public/ico.png"/>
            <Navigator/>
        </aside>
      </>
  )
}

