import React, { useState } from 'react'
import {Alert, Label, Select, Button, Modal} from 'flowbite-react'
import { HiInformationCircle } from 'react-icons/hi'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

export const PostCards = () => {
  
  const [cardType, setCardType] = useState("")
  const [membership, setMemberShip] = useState("")
  const [alert, setAlert] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const token = useSelector(store => store.authReducer.token)
  const navigate = useNavigate()
  const isDesktop = useMediaQuery({minWidth:1024})

  async function handleConfirm () {
    
    const cardBody = {
      color: membership === '' ? null : membership,
      cardType:cardType === '' ? null : cardType
    } 

    if ((membership !== '') && (cardType !== '')) {
      try {
        const response = await axios.post("https://homebanking-e3f1.onrender.com/api/clients/current/cards/", cardBody, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        setAlert({type:'success', message:response.data})
        setTimeout(() => {
          setAlert(null)
          setShowModal(false)
          navigate('/cards')
        }, 1000)
        
      } catch (e) {
          setAlert({type:'failure', message:e.response.data})
          setTimeout (() => {
            setShowModal(false)
            setAlert(null)
          }, 1500)
      }
    } else if( membership === '' && cardType === '') {
      setAlert({type:'failure', message:"Card type and membership cannot be empty"})
      setTimeout(() => {
        setShowModal(false)
        setAlert(null)
      }, 1500)
    } else if(membership === '') {
      setAlert({type:'failure', message:"Please, select your card membership"})
      setTimeout(() => {
        setShowModal(false)
        setAlert(null)
      }, 1500)
    } else if (cardType === '') {
      setAlert({type:'failure', message:"Please, select your card type"})
      setTimeout(() => {
        setAlert(null)
        setShowModal(false)
      }, 1500)
    }
  }

  const handleApply = () => {
    setShowModal(true)
  }
  
  return (
    <>
      <h1 className ="text-3xl font-bold">Apply for a new card</h1>
      <div className="flex flex-col lg:flex-row justify-center items-center">
        <div className="w-[350px] p-6 flex flex-col gap-2 justify-center">
          <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="cardType" value="Select card type" />
            </div>
            <Select onChange={e=> setCardType(e.target.value)} id="cardType" required>
              <option value="" > -- Select -- </option>
              <option value="CREDIT">CREDIT</option>
              <option value="DEBIT">DEBIT</option>
            </Select>
          </div>
          <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="membership" value="Select card membership (color)" />
            </div>
            <Select onChange={e=>setMemberShip(e.target.value)} id="membership" required>
              <option value=""> -- Select -- </option>
              <option value="GOLD" >GOLD</option>
              <option value="SILVER">SILVER</option>
              <option value="TITANIUM"> TITANIUM</option>
            </Select>
          </div>
          <div className="flex justify-center gap-2 p-4"> 
            {
              isDesktop ? <Button onClick={handleApply} size="lg" className="w-[100px]">Apply</Button> :<Button onClick={handleApply} size="sm" className="w-[100px]">Apply</Button>
            }
            
          </div>
        </div>
        <div className="w-[350px] flex justify-center">
          <img src="/applyCards.jpg" className ="object-cover h-[320px] w-[80%] lg:w-full "></img>
        </div>
      </div>
      <Modal show={showModal} onClose={() => setShowModal(false) } >
        <Modal.Body>
          <div className="flex flex-col gap-4 ">
            <div className="flex justify-between"> 
              <div>
                <h3 className="text-2xl font-medium text-gray-900">Confirm Card</h3>
                <p>Are you sure you want to get this card?</p>
              </div>
              <img src="/ico.png" alt="" />
            </div>
            <div className ="flex flex-col gap-4">
              <div className="flex flex-col gap-2 rounded-lg  w-full items-center bg-blue-200 p-10">
                <p>Card Type: {cardType}</p>
                <p>Membership: {membership}</p>
              </div>
            </div>
            <div className="flex justify-center">
            {alert && (
              <Alert color={alert.type} icon={HiInformationCircle}>
                <span>{alert.message}</span>
              </Alert>
            )}
            </div>
            
            <div className="flex gap-4 justify-end">
              <Button className="w-[100px]" onClick={handleConfirm}>Confirm</Button>
              <Button className="w-[100px]" onClick={() => setShowModal(false)}>Cancel</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}
