import React from 'react'
import { Cards } from '../components/Cards'
import MainLayout from '../layouts/MainLayout'

export const GetCards = () => {
  return (
    <MainLayout>
      <h2 className="p-2 text-xl">Debit Cards</h2>
      <div className="flex flex-wrap gap-2 p-2">
      <Cards color="Gold" type="DEBIT"/>
      <Cards color="Silver" type ="DEBIT"/>
      <Cards color="Titanium" type="DEBIT"/>
      </div>
      <h2 className="p-2 text-xl">Credit Cards</h2>
      <div className ="flex flex-wrap gap-2 p-2">
      <Cards color="Gold" type="CREDIT"/>
      <Cards color="Silver" type="CREDIT"/>
      <Cards color="Titanium" type="CREDIT"/>
      </div>
    </MainLayout>
  )
}
