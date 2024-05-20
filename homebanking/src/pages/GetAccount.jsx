import React from 'react'
import { Carrousel } from '../components/Carrousel'
import { CardAccount } from '../components/CardAccount'
import { Resume } from '../components/Resume'

export const GetAccount = () => {
  return (
      <div className="flex flex-col justify-evenly p-4 flex-1 items-center">
        <h2 className="text-3xl p-2 text-center font-bold">Your selected account</h2>
        <div className="flex w-full gap-4 justify-center">
          <CardAccount/>
          <Resume/>
        </div>
        <Carrousel/>
      </div>
  )
}
