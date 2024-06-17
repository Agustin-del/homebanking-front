import React, { useEffect } from 'react'
import MainLayoutAuthenticated from '../layouts/MainLayoutAuthenticated'
import { useNavigate } from 'react-router-dom'
import { Card } from 'flowbite-react'

export const Logout = () => {
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 2000)
  }, [navigate])

  return (
    <MainLayoutAuthenticated>
      <div className="flex justify-center items-center">
        <Card className="h-[80px] w-[150px] text-center lg:text-left lg:h-[150px] lg:w-[350px] flex justify-center items-center max-w-sm bg-blue-200">         
          <p className=" text-xl lg:text-3xl font-bold text-gray-700">
            Logging out...
           </p>
        </Card>
      </div>
    </MainLayoutAuthenticated>
  )
}
