import React, { useEffect, useState } from 'react'
import { Welcome } from '../components/Welcome'
import { GetAccountCard } from '../components/GetAccountCard'
import { Carrousel } from '../components/Carrousel'
import { Button } from 'flowbite-react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export const Landing = () => {
  const [data, setData] = useState({firstName:'', lastName:'', accounts:[]})

  useEffect(() => {
      getData()
  }, [])

  const getData = async () => {
    let response = await axios.get('http://localhost:8080/api/clients/1')
    setData(response.data)
  }

  return (
        <div className="flex flex-col justify-evenly flex-1 ">
          <Welcome client={data.firstName + ' ' + data.lastName}/>
          <div className="flex justify-evenly gap-4">
            {data.accounts && data.accounts.map(account => {
              return <GetAccountCard accountId = {account.id} key={account.id} number={account.number} balance={account.balance}/>
            })}
          </div>
            <Button className="w-1/3 self-center">Request new account</Button>
            <Carrousel/>
        </div>
  )
}
