import React from 'react'
import MainLayout from "../layouts/MainLayout"
import { Welcome } from '../components/Welcome'
import { GetAccountCard } from '../components/GetAccountCard'
import { Carrousel } from '../components/Carrousel'

export const Landing = () => {
  return (
    <MainLayout>
        <div className="flex flex-col justify-evenly flex-1 ">
        <Welcome/>
        <div className="flex justify-evenly">
          <GetAccountCard/>
          <GetAccountCard/>
        </div>
        <Carrousel   />
        </div>
    </MainLayout>
  )
}
