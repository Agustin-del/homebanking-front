import React, { useEffect, useState } from 'react'

export const Cards = ({color, type, cardHolder, number, date}) => {
  
  switch(color) {
      case 'GOLD':
          color = "bg-[#BE8C29]"
          break
      case 'SILVER':
          color ="bg-[#6A696F]" 
          break
      case 'TITANIUM':
          color ="bg-[black]"
          break
    }
  
    return (
      <div className={`card relative h-[260px] w-[400px] flex flex-col justify-end px-6 py-10 text-white rounded-3xl gap-8 ${color}`}>
        <div className ="flex justify-between">
          <div className="flex flex-col">
            <p className="text-3xl">MASTER CARD</p>
            <p>{type}</p>
          </div>
          <img src="/ico.png"></img>
        </div>
        <p className="text-2xl font-medium">{number}</p>
        <div className="flex justify-between gap-10 items-center">
          <p className="text-lg font-medium">{cardHolder}</p>
          <div className="flex-1 flex flex-col justify-center items-center">
            <p>Valid Date</p>
            <p>{date}</p>
          </div>
          <div className="self-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 58 36" height="36" width="58">
            <circle fillOpacity="0.62" fill="#EB001B" r="18" cy="18" cx="18"></circle>
            <circle fill="#F79E1B" r="18" cy="18" cx="40" opacity="5"></circle>
            </svg>
          </div>
        </div>
      </div>
  )
}
