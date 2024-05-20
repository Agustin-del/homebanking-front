import { GetLoansCard } from '../components/GetLoansCard'
import { Carrousel } from '../components/Carrousel'
import { Button } from 'flowbite-react'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import axios from 'axios'


export const GetLoans = () => {
    const [data, setData] = useState([])
    // const [loading, setLoading] = useState(false)

    useEffect(() => {
        getData()
    }, [])
  
    const getData = async () => {
    //   setLoading(true)
      let response = await axios.get('http://localhost:8080/api/clients/1')
      setData(response.data.loans)
    }
  
    
    return (
    <>
      <h1 className="text-4xl font-bold">Your loans</h1>
      <div className="flex gap-4 justify-center">
        {data.map((loan) => {
          return <GetLoansCard key={loan.id} name={loan.name} amount={loan.amount} payments={loan.payments} />
        })}
      </div>
      <Link to="applyLoan" className="w-[250px]">
        <Button className="w-full">Request new loan</Button>
      </Link>
      <Carrousel/>
    </>
  )
}
