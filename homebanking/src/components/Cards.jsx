import React, { useEffect, useState } from 'react'

export const Cards = ({color, type}) => {
  
  const [colorin, setColorin] = useState("")  
  
  useEffect(()=> {
    switch(color) {
      case 'Gold':
          setColorin("#BE8C29")
          break
      case 'Silver':
          setColorin("#6A696F")
          break
      case 'Titanium':
          setColorin("black")
          break
    }
  }, [])
  
    return (
      <div className={`card relative h-[260px] w-[400px] flex flex-col justify-end px-6 py-10 text-white rounded-3xl gap-8 bg-[${colorin}]`}>
      <div className ="flex justify-between">
      <div className="flex flex-col">
        <p className="text-3xl">MASTER CARD</p>
        <p>{type}</p>
      </div>
      <img src="/ico.png"></img>
      </div>
      <p className="text-2xl  font-medium">5430 4900 3232 9755</p>
      <div className="flex justify-between gap-10">
      <p className="text-lg font-medium">Elon Musk</p>
      <div className="flex-1 flex flex-col justify-end">
        <p className="self-end">Valid Date</p>
        <p className="self-end">2/14/2024</p>
      </div>
      <div className="self-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 58 36" height="36" width="58">
        <circle fill-opacity="0.62" fill="#EB001B" r="18" cy="18" cx="18"></circle>
        <circle fill="#F79E1B" r="18" cy="18" cx="40" opacity="5"></circle>
        </svg>
    </div>
  </div>
</div>
  )
}
