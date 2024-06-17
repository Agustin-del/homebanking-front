import React, { useEffect ,useState } from 'react'
import { Modal, Alert, Label, Radio, Select, TextInput, Button} from "flowbite-react";
import { MdAttachMoney } from "react-icons/md";
import { useSelector } from 'react-redux';
import { HiInformationCircle } from 'react-icons/hi';
import axios from 'axios';
import { useMediaQuery } from 'react-responsive';


export const PostTransaction = () => {
  
  const [selectedDestination, setSelectedDestination] = useState('self')
  const token = useSelector(store => store.authReducer.token)
  const [accounts, setAccounts] = useState([])
  const [originAccount, setOriginAccount] = useState('')
  const [destinationAccount, setDestinationAccount] = useState('')
  const [amount, setAmount] = useState('')
  const [description, setDescription] = useState('')
  const [alert, setAlert] = useState('')
  const[modalAlert, setModalAlert] = useState('')
  const [showModal, setShowModal] = useState(false)
  const isDesktop = useMediaQuery({minWidth:1024})
  
  const handleRadioChange = (event) => {
    setSelectedDestination(event.target.value)
  }
  
  const handleApply = (event) => {
    event.preventDefault()
    setShowModal(true)
  }

  const handleAmountChange= (event) => {
    const value = event.target.value
    if(value >= 0) {
      setAmount(value)
    }
  }
  const handleConfirm = async () => {
    const transaction = {
      amount:amount,
      description:description,
      sourceAccount: originAccount,
      destinationAccount: destinationAccount
    }
    try {
      const response = await axios.post('http://localhost:8080/api/transactions/', transaction, {
        headers : {
          Authorization: `Bearer ${token}`
        }
      })
      setModalAlert({type:'success', message:response.data})
      setTimeout (() => {
        setShowModal(false)
        setModalAlert(null)
        setOriginAccount('')
        setDestinationAccount('')
        setAmount('')
        setAccounts([])
        setDescription('')
      }, 1000)
    } catch (e) {
      setModalAlert({type:'failure', message:e.response.data})
      setTimeout(() => {
        setModalAlert(null)
        setShowModal(false)
      }, 1000)  
    }
  }

  async function getAccounts() {
    try {
      const response = await axios.get('http://localhost:8080/api/clients/current/accounts/', {
        headers :{
          Authorization: `Bearer ${token}`
        }
        
      })
      setAccounts(response.data)
    } catch(e) {
      console.error(e)
    }
  }

  useEffect(() => {
    getAccounts()
  }, [])

  useEffect(() => {
    if (accounts.length > 0 && originAccount) {
      let account = accounts.find(account => account.number === originAccount)
      if(account.balance < amount ) {
        setAlert({type:'failure', message:"Insufficient funds"})
      } else {
        setAlert(null)
      } 
    }
  }, [amount, originAccount, accounts])
  
  return (
    <>
      <h1 className="text-2xl lg:text-4xl font-bold">Make a transaction</h1>
      <div className="w-full flex flex-wrap font-normal p-4 items-center"> 
        <div className ="lg:w-1/2">
          <form className="w-full p-4 flex flex-col gap-4" onSubmit={handleApply}>
            <fieldset className="max-w-md w-1/2">
              <div className="flex justify-center items-center gap-2 lg:gap-8">
                <span className="font-normal text-sm lg:text-base">Destination:</span>
                <Radio id="self" name="destination" value="self" checked={selectedDestination ==='self'} onChange={handleRadioChange}/>
                <Label className="text-sm lg:text-base font-normal" htmlFor="self">Self</Label>
                <Radio id="others" name="destination" value="others" checked={selectedDestination === 'others'} onChange={handleRadioChange}/>
                <Label className="text-sm lg:text-base font-normal" htmlFor="others">Others</Label>
              </div>
            </fieldset>
            <div className="w-full flex flex-col " >
                <div className="mb-2 block">
                <Label className="text-sm lg:text-base font-normal" htmlFor="originAccount" value="Origin Account:" />
              </div>
              <Select onChange={e=> setOriginAccount(e.target.value)} id="originAccount" className=" w-[250px] lg:w-[350px]" value={originAccount} required>
                <option> --Select-- </option>
                {
                  accounts && accounts.map(account => {
                    return <option key={account.id} value={account.number}> {account.number} </option>
                })
              } 
              </Select>
            </div>
            {
              selectedDestination === 'others' ? (
                <div>  
                  <div className="mb-2">
                    <Label className ="font-normal text-sm lg:text-base" htmlFor="destinationAccount" value="Destination account: " />
                  </div>
                  <TextInput onChange={e => setDestinationAccount(e.target.value)} id="destinationAccount" type="text" className="w-[250px] lg:w-[350px]" value={destinationAccount}/>
                </div>
            ) :
            <div className="w-full flex flex-col " >
              <div className="mb-2 block">
                <Label className="text-sm lg:text-base font-normal" htmlFor="destinationAccount" value="Destination Account:" />
              </div> 
              <Select  onChange={e => setDestinationAccount(e.target.value)} id="destinationAccount" className="w-[250px] lg:w-[350px]"  value={destinationAccount} required>
              <option> --Select-- </option>
              {
                accounts && accounts.map(account => {
                  return <option key={account.id} value={account.number}> {account.number} </option>
              }) 
              }
              </Select>
            </div>
            }
            <div>  
              <div className="mb-2">
                <Label className ="font-normal text-base" htmlFor="amount" value="Amount:" />
              </div>
              <div className="relative flex items-center">
                <MdAttachMoney className="absolute top-[1px] left-2 h-10 w-8"/> 
                <TextInput id="amount" type="number" min='0' onChange={handleAmountChange} className="pl-10 w-[250px] lg:w-[350px] font-normal text-base" value ={amount} required/>
              </div>
            </div>
            <div>  
              <div className="mb-2">
                <Label className ="font-normal text-base" htmlFor="description" value="Description:" />
              </div>
              <TextInput id="description" onChange={(e) => setDescription(e.target.value)} type="text" className="w-[250px] lg:w-[350px]" value={description}/>
            </div>
            <div className="flex justify-center gap-4 w-[95%] lg:w-[89%]">
              {isDesktop ? <Button type="submit" size="lg" className="w-[100px]">Apply</Button> : <Button type="submit" size="sm" className="w-[100px]">Apply</Button>}
              
            </div>
          </form>
          <div className="flex justify-center w-[89%]">
            {alert && (
              <Alert color={alert.type} icon={HiInformationCircle}>
                <span>{alert.message}</span>
              </Alert>
            )}
          </div>
        </div>
        <img className="lg:w-[49%] h-[250px] lg:h-[350px] rounded-lg" src="/applyTransaction.jpg"/>
      </div>
      <Modal show={showModal} onClose={() => setShowModal(false) } >
        <Modal.Body>
          <div className="flex flex-col gap-4 ">
            <div className="flex justify-between"> 
              <div>
                <h3 className="text-2xl font-medium text-gray-900">Confirm Transaction</h3>
                <p>Are you sure you want to make this transaction?</p>
              </div>
              <img src="/ico.png" alt="" />
            </div>
            <div className ="flex flex-col gap-4">
              <div className="flex flex-col gap-2 rounded-lg  w-full items-center bg-blue-200 p-10">
                <p>Origin Account: {originAccount}</p>
                <p>Destination Account: {destinationAccount}</p>
                <p>Amount: ${amount}</p>
              </div>
            </div>
            <div className="flex justify-center">
              {modalAlert && (
                <Alert color={modalAlert.type} icon={HiInformationCircle}>
                  <span>{modalAlert.message}</span>
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
  );
}

