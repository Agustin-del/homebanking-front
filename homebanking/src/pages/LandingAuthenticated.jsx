import React, { useEffect, useState } from 'react'
import { Welcome } from '../components/Welcome'
import { GetAccountCard } from '../components/GetAccountCard'
import { Carrousel } from '../components/Carrousel'
import { Button, Alert } from 'flowbite-react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useMediaQuery } from 'react-responsive'
import {Box, Skeleton } from '@mui/material'

export const LandingAuthenticated = () => {
  const [clientData, setClientData] = useState({firstName:'', lastName:'', accounts:[]})
  const [accountData, setAccountData] = useState(null)
  const [creating, setCreating] = useState(false)
  const [error, setError] = useState(null)
  const token = useSelector(store => store.authReducer.token)
  const isDesktop = useMediaQuery({minWidth:1024})
  const [loading, setLoading] = useState(true)
  const [newAccountButton, setNewAccountButton] = useState(false)

  useEffect(() => {
      getClientData()
      getAccountData()
  }, [])

  const getClientData = async () => {
    try {
      const response = await axios.get('https://homebanking-e3f1.onrender.com/api/auth/current', {
        headers: {
          Authorization:`Bearer ${token}`
        }
      })
      setClientData(response.data)
      setLoading(false)
    } catch (e) {
      console.error(e)
    }
  }

  const getAccountData = async () => {
    const response = await axios.get('https://homebanking-e3f1.onrender.com/api/clients/current/accounts/', {
      headers: {
        Authorization: `Bearer ${token}`
        }
      })
      setAccountData(response.data)
  }

  const handleNewAccount  = async () => {
    setNewAccountButton(true)
    if (accountData.length < 3) {
      setCreating(true)
    }

    try {
      await axios.post('https://homebanking-e3f1.onrender.com/api/clients/current/accounts/', null, {
        headers: {
          Authorization: `Bearer ${token}`
        } 
      })
      getAccountData()
    } catch (error) {
      if(error.response && error.response.status === 403) {
        setError('You already have three registered accounts')
      } else {
        setError("Error creating account: ", error)
      }
      setTimeout(() => {
        setError(null)
      }, 2000);
    } finally {
      setTimeout(() => {
        setCreating(false)
        setNewAccountButton(false)
      }, 500);
    }
  }
  return (
        loading ? 
          <Box className="h-full w-full flex flex-col gap-8" >
            <Skeleton variant ="text" className="h-[10vh] w-full"/> 
            <Skeleton variant ="text" className="h-20[vh] w-full"/> 
            <div className="flex flex-col gap 2">
              <Skeleton variant="rectangular" className ="min-h-[40vh] w-full"/> 
              <Skeleton variant="rectangular" className ="h-[30vh] w-full"/>
            </div>
          </Box> 
          : <>
            <div className="flex flex-col justify-evenly flex-1 w-full p-4 gap-4">
              <Welcome client={clientData.firstName + ' ' + clientData.lastName}/>
              <div className="flex flex-wrap justify-evenly gap-4">
                {accountData && accountData.map(account => {
                  return <GetAccountCard accountId ={account.id} key={account.id} number={account.number} balance={account.balance}/>
                })}
              </div>
              <div className="flex justify-center flex-col items-center w-full">
                {creating && <Alert className="w-[300px]" color="info">Creating your account...</Alert>}
                {error && <Alert className="w-[300px]" color="failure">{error}</Alert>}
                <div>
                  {isDesktop ? <Button className="w-[180px] self-center" onClick={handleNewAccount} disabled={newAccountButton} >Request new account</Button> : <Button className="self-center" onClick={handleNewAccount} disabled={newAccountButton}><p className="text-xs">Request new account</p></Button>}
                </div>
              </div>
            </div> 
              <Carrousel/>
          </> 
          
          ) 
        }