import React, { useEffect, useState } from 'react'
import { Welcome } from '../components/Welcome'
import { GetAccountCard } from '../components/GetAccountCard'
import { Carrousel } from '../components/Carrousel'
import { Button, Alert } from 'flowbite-react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useMediaQuery } from 'react-responsive'
import { Skeleton } from '@mui/material'

export const LandingAuthenticated = () => {
  const [clientData, setClientData] = useState({firstName:'', lastName:'', accounts:[]})
  const [accountData, setAccountData] = useState(null)
  const [creating, setCreating] = useState(false)
  const [error, setError] = useState(null)
  const token = useSelector(store => store.authReducer.token)
  const isDesktop = useMediaQuery({minWidth:1024})
  const [loading, setLoading] = useState(true)

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
      setTimeout(() => {
        setLoading(false)
      }, 5000)
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
      }, 500);
    }
  }
  return (
        <div className="flex flex-col justify-evenly flex-1 w-full p-4 gap-4">
          {loading ? <Skeleton/> 
          :
          <>
            <Welcome client={clientData.firstName + ' ' + clientData.lastName}/>
            <div className="flex flex-wrap justify-evenly gap-4">
              {accountData && accountData.map(account => {
                return <GetAccountCard accountId ={account.id} key={account.id} number={account.number} balance={account.balance}/>
              })}
            </div>
            <div className="flex justify-center">
              {creating && <Alert color="info">Creating your account...</Alert>}
              {error && <Alert color="failure">{error}</Alert>}
            </div>
              {isDesktop ? <Button className="self-center" onClick={handleNewAccount}>Request new account</Button> : <Button className="self-center" onClick={handleNewAccount}><p className="text-xs">Request new account</p></Button>}
              <Carrousel/>
          </>
          }
        </div>
  )
}
