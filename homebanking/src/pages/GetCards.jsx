import React, {  useEffect, useState } from 'react'
import { Cards } from '../components/Cards'
import axios from 'axios'
import { Button, Card } from 'flowbite-react'
import { Carrousel } from '../components/Carrousel'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useMediaQuery } from 'react-responsive'

export const GetCards = () => {
  const [debitCards, setDebitCards] = useState([]);
  const [creditCards, setCreditCards] = useState([]);
  const token = useSelector (store => store.authReducer.token)
  const isDesktop = useMediaQuery({minWidth:1024})

  useEffect(() => {
    getCards();
  }, []);

  const getCards = async () => {
    try {
      const response = await axios.get('https://homebanking-e3f1.onrender.com/api/clients/current/cards/', {
        headers: {
          Authorization:`Bearer ${token}`
        }
      })
      
      const debitCardsData = response.data.filter(card => card.cardType === 'DEBIT')
      const creditCardsData = response.data.filter(card => card.cardType === 'CREDIT');
      
      setDebitCards(debitCardsData);
      setCreditCards(creditCardsData);
    } catch (error) {
      console.error('Error getting cards: ', error);
    }
  };

  return (
    <>
      <h1 className="text-2xl lg:text-4xl font-bold">Your Cards</h1>
      <div className ="flex flex-col items-center gap-4 w-full p-4">      
        <div className="flex justify-center gap-4 p-4 w-full">
          {isDesktop ? <>
            <div className="w-1/2 flex flex-col gap-4">
              <h2 className="text-2xl text-center pb-2">Debit Cards</h2>
              {debitCards.length === 0 ? (
              <p className ="text-base text-center text-gray-700">No debit cards available</p>
              ) : (
              debitCards.map(card => (
                <Cards key={card.id} color={card.color} type={card.cardType} cardHolder={card.cardHolder} number={card.number} date={card.truDate} CVV={card.cvv}/>
              ))
              )}
            </div>
            <div className="w-1/2 flex flex-col gap-4">
              <h2 className="text-2xl text-center pb-2">Credit Cards</h2>
                { creditCards.length === 0 ? (
                <p className='text-base text-center text-gray-700'>No credit cards available</p>
                ) : (
                creditCards.map(card => (
                <Cards key={card.id} color={card.color} type={card.cardType} cardHolder={card.cardHolder} number={card.number} date={card.truDate} CVV={card.cvv}/>
              ))
            )}
            </div> 
            </> :
            <div className="flex flex-col gap-4">
              <h2 className="text-base text-center pb-2">Debit Cards</h2>
              { debitCards.length === 0 ? (
                <p className="text-base text-center text-gray-700">No debit cards available</p>
              ) : (
              debitCards.map (card => (
                <Cards key={card.id} color={card.color} type={card.cardType} cardHolder={card.cardHolder} number={card.number} date={card.truDate} CVV={card.cvv}/>
              ))
            )}
              <h2 className="text-base text-center pb-2">Credit Cards</h2>
              { creditCards.lengt === 0 ? (
                <p className="text-base text-center text-gray-700">No credit cards available</p>
              ) : (
                creditCards.map(card => (
                  <Cards key={card.id} color={card.color} type={card.cardType} cardHolder={card.cardHolder} number={card.number} date={card.truDate} CVV={card.cvv}/>
                ))
              )}
            </div>
          }
      </div>
      <Link to="applycard">
      {isDesktop ?  <Button label="2" className="items-center text-lg ">Apply for a new card</Button> : <Button className="self-center"><p className="text-xs">Apply for a new card</p></Button>}     
      </Link>
      <Carrousel/>
      </div>
    </>
  );
};