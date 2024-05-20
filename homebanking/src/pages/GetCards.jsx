import React, { useDebugValue, useEffect, useState } from 'react'
import { Cards } from '../components/Cards'
import axios from 'axios'
import { Button } from 'flowbite-react'
import { Carrousel } from '../components/Carrousel'
import { Link } from 'react-router-dom'

export const GetCards = () => {
  
  const [data, setData] = useState([])

  useEffect(() => {
      getData()
  }, [])

  const getData = async () => {
    let response = await axios.get('http://localhost:8080/api/clients/1')
    setData(response.data.cards)
  }

  return (
      <>
      <h1 className="text-4xl font-bold">Your Cards</h1>
      <div className="h-full flex justify-center gap-4 flex-wrap p-4">
        {data.map(card => {
          return <Cards key={card.id} color={card.color} type={card.type} cardHolder={card.cardHolder} number={card.number} date={card.truDate}/>
        })}
      <Link to="applycard" >
        <Button label="2" className="items-center text-lg">Apply for a new card</Button>
      </Link>
      <Carrousel/> 
      </div>
      </>
  )
}
