import React, { useEffect, useState } from 'react'
import { Carrousel } from '../components/Carrousel'
import { CardAccount } from '../components/CardAccount'
import { Resume } from '../components/Resume'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { Box, Skeleton } from '@mui/material'


export const GetAccount = () => {
  const {accountId} = useParams ()
  const [loading, setLoading] = useState(true)
  const [account, setAccount] = useState({number:"", balance:0})
  const [transactions, setTransactions] = useState([])
  const token = useSelector(store => store.authReducer.token)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://homebanking-e3f1.onrender.com/api/clients/current/accounts/`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        let account = response.data.find(account => account.id == accountId)
        setAccount(account)
        setTransactions(account.transactions)
        setLoading(false)
      } catch (e) {
        console.error(e)
      }
    }
    fetchData()
  }, [])
  return ( loading ? <Box className="h-full w-full flex flex-col gap-8" >
      <Skeleton variant ="text" className="h-[10vh] w-full"/> 
      <Skeleton variant ="text" className="h-20[vh] w-full"/> 
    <div className="flex flex-col gap 2">
      <Skeleton variant="rectangular" className ="min-h-[40vh] w-full"/> 
      <Skeleton variant="rectangular" className ="h-[30vh] w-full"/>
    </div>
  </Box>  :
      <div className="flex flex-col justify-between lg:justify-evenly p-4 flex-1 items-center gap-4">
        <div>
          <h2 className="text-xl lg:text-3xl p-2 text-center font-bold">Your selected account</h2>
          <div className="flex w-full justify-center items-center gap-4 flex-col lg:flex-row">
            <CardAccount account={account}/>
            <Resume transactions={transactions} />
          </div>
        </div>
        <Carrousel/>
      </div>
  )
}
