import { GetLoansCard } from '../components/GetLoansCard'
import { Carrousel } from '../components/Carrousel'
import { Button } from 'flowbite-react'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'

export const GetLoans = () => {
  const [loans, setLoans] = useState([])
  const token = useSelector(store => store.authReducer.token)
  
  const getLoans = async () => {
    try {
      const response = await axios.get('https://homebanking-e3f1.onrender.com/api/auth/current', {
        headers: {
          Authorization:`Bearer ${token}`
        }
      })
      setLoans(response.data.loans)
    } catch(error) {
      console.error("Error getting loans: ", error)
    }
  }
  
  useEffect(() => {
      getLoans()
  }, [])
  
  return (
  <>
    <h1 className="text-2xl lg:text-4xl font-bold">Your loans</h1>
     <div className="flex flex-col items-center lg:flex-row gap-4 w-full justify-evenly">
      {(loans.length > 0) ? loans.map((loan) => {
        return <GetLoansCard key={loan.id} name={loan.name} amount={loan.amount} payments={loan.payments} />
        }) :
        <p className='text-base text-center text-gray-700'>No loans available</p>
      }
      </div>
      <Link to="applyLoan" className="w-[150px] lg:w-[250px]">
        <Button className="w-full">Request new loan</Button>
      </Link>
      <Carrousel/>
    </>
  )
}
