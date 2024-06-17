import React, { useEffect } from 'react'
import { Carrousel } from '../components/Carrousel'
import { CardAccount } from '../components/CardAccount'
import { Resume } from '../components/Resume'
import { useParams } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

export const GetAccount = () => {
  const {accountId} = useParams ()
  const isDesktop = useMediaQuery({minWidth:1024})

  return (
      <div className="flex flex-col justify-between lg:justify-evenly p-4 flex-1 items-center gap-4">
        <div>
          <h2 className="text-xl lg:text-3xl p-2 text-center font-bold">Your selected account</h2>
          <div className="flex w-full justify-center items-center gap-4 flex-col lg:flex-row">
            <CardAccount accountId={accountId}/>
            <Resume accountId={accountId}/>
          </div>
        </div>
        <Carrousel/>
      </div>
  )
}
