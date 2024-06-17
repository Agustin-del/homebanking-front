import React, { useEffect, useState } from 'react'
import { Modal, Alert, Label, Select, TextInput, Button } from "flowbite-react";
import { MdAttachMoney } from "react-icons/md";
import axios from 'axios';
import { useSelector } from 'react-redux';
import { HiInformationCircle } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

export const PostLoan = () => {
  const [loanType, setLoanType] = useState('')
  const[account, setAccount] = useState('')
  const [payments, setPayments] = useState([])
  const [amount, setAmount] = useState('')
  const [maxAmounts, setMaxAmounts] = useState([{name:'', maxAmount:Infinity}])
  const [numbers, setNumbers] = useState([])
  const [color, setColor] = useState('gray')
  const [loans, setLoans] = useState([{name:'', maxAmount:Infinity, payments:[]}])
  const [paymentChoice, setPaymentChoice] = useState('')
  const[modalAlert, setModalAlert] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [alert, setAlert] = useState('')
  const token = useSelector(store => store.authReducer.token)
  const navigate = useNavigate()
  const isDesktop = useMediaQuery({minWidth:1024})

  async function getLoans() {
    try {
      const response = await axios.get("http://localhost:8080/api/loans/", {
        headers: {
          Authorization:`Bearer ${token}`
        }
      })
      const loans = response.data 
      setLoans(loans)
    } catch (e) {
      console.error(e)
    }
  }

  async function getNumberAccounts() {
      try {
          const response = await axios.get(`http://localhost:8080/api/clients/current/accounts/`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          const accounts = response.data
          const numbers = accounts.map(account => account.number)
          setNumbers(numbers)
      }  catch (e) {
        console.error(e)
      } 
    }

  useEffect (() => {
    getLoans()
    getNumberAccounts()
  },[])
  
  useEffect(() => {
    const maxAmounts = loans.map(loan => {
      return {
        name:loan.name,
        maxAmount:loan.maxAmount
      }
    })
    setMaxAmounts(maxAmounts)
  }, [loans])

  useEffect(() => {
    let maxAmount = maxAmounts[loanType]
    if (parseFloat(amount) > maxAmount) {
      setColor('failure')
    } else if (!amount) {
      setColor('gray')
    } else {
      setColor('success')
    } 
  }, [amount, loanType])

  useEffect(() => {
    const options = loans.reduce((acc, loan) => {
        acc[loan.name] = loan.payments
        return acc
    }, {})
    setPayments(options[loanType] || [])
  }, [loans, loanType])

  useEffect(() => {
    if (loanType === '') {
      setAlert('')
    } else {
      let loan = maxAmounts.find(loan => loan.name === loanType)
      setAlert({message:`The maximum amount for ${loan.name} is ${loan.maxAmount}`})
    }
  }, [loanType])

  const handleLoanType = (event => {
    setLoanType(event.target.value)
    setAmount('')
    setColor('gray')
  })

  const handleAccount = (event) => {
    setAccount(event.target.value)
  }
  
  const handleAmountChange = (event => {
    setAmount(event.target.value)
  })

  const handlePaymentChoice = (event) => {
    setPaymentChoice(event.target.value)
  }

  const handleApply = () => {
    setShowModal(true)
  }

  async function handleConfirm () {
    if (loanType =='') {
      setModalAlert({message:"Please select a loan type", type:'failure'})
      setTimeout(() => {
        setModalAlert('')
        setShowModal(false)
      }, 1000)
      return
    } 
    if (amount == '') {
      setModalAlert({message:"Please enter an amount", type:'failure'})
      setTimeout(() => {
        setModalAlert('')
        setShowModal(false)
      }, 1000)
      return
    }
    let loan = loans.find(loan => loan.name === loanType)
    const requestBody = {
      id: loan.id,
      originAccount: account,
      amount: parseFloat(amount),
      installments: parseInt(paymentChoice)
    }
    try {
      const response = await axios.post('http://localhost:8080/api/loans/', requestBody, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setModalAlert({type:'success', message:response.data})
      setTimeout(() => {
        setModalAlert('')
        setShowModal(false)
        navigate('/loans')
      }, 1000)
    } catch (e) {
      setModalAlert({message:e.response.data, type:'failure'})
      setTimeout(() => {
        setModalAlert('')
        setShowModal(false)
      }, 1500);
    }
  }
  return ( 
    <>
    <div className="flex flex-col items-center h-full">
      <h1 className="text-2xl lg:text-3xl font-bold">Apply for a loan</h1>
      <div className=" w-[80%]  lg:w-full flex flex-col lg:flex-row gap-8 p-4 lg:justify-center lg:items-center" >
        <div className="flex flex-col  gap-4 w-1/2">
          <form className=" flex flex-col gap-4">
            <div className="max-w-md">
              <div className="mb-2 block">
                <Label htmlFor="loanType" value="Select loan: " />
              </div>
              <Select id="loanType" className ="w-[200px] lg:w-[367px]" onChange={handleLoanType} required>
                <option value="">--Select--</option>
                {loans && loans.map( loan => <option key={loan.id} value={loan.name}>{loan.name}</option>)}
              </Select>
            </div>
            <div className="max-w-md">
              <div className="mb-2 block">
                <Label htmlFor="originAccount" value="Origin account: " />
              </div>
              <Select className ="w-[200px] lg:w-[367px]" id="originAccount" onChange={handleAccount}required>
                <option value=''>--Select--</option>
                {numbers && numbers.map(number => <option key={number} value={number}>{number}</option>)}
              </Select>
            </div>
            <div className="flex flex-col w-full gap-2">
              <Label htmlFor='amount' value='Amount:' color={color}/>
              <div className="relative">
                <MdAttachMoney className="absolute top-[1px] left-2 h-10 w-8"/> 
                <TextInput id="amount" value ={amount} type="number" color={color} onChange={handleAmountChange} className="pl-10 w-[200px] lg:w-[367px] font-normal text-base" required/>
              </div>
              <div className="flex ">
                {alert && (
                  <Alert className="lg:w-[370px]" color="warning" icon={HiInformationCircle}>
                    <span>{alert.message}</span>
                  </Alert>
                )}
              </div>
            </div>
            <div className="max-w-md">
              <div className="mb-2 block">
                <Label htmlFor="payments" value="Payments: " />
              </div>
              <Select className ="w-[200px] lg:w-[367px]" id="payments" onChange={handlePaymentChoice} required>
                <option value=''> --Select--</option>
                {payments.map((payment, index) => {
                  return <option key={index} value={payment}>
                    {payment}
                  </option>
                })}
              </Select>
            </div>
          </form>      
            <div className="w-[200px] lg:w-[90%] flex justify-center gap-4">
              {isDesktop ? <Button onClick={handleApply} size="lg" className="w-[100px]">Apply</Button>: <Button onClick={handleApply} size="sm">Apply</Button>}
            </div>
          <Modal show={showModal} onClose={() => setShowModal(false) } >
            <Modal.Body>
              <div className="flex flex-col gap-4 ">
                <div className="flex justify-between"> 
                  <div>
                    <h3 className="text-2xl font-medium text-gray-900">Confirm Loan</h3>
                    <p>Are you sure you want this loan?</p>
                  </div>
                  <img src="/ico.png" alt="" />
                </div>
                <div className ="flex flex-col gap-4">
                  <div className="flex flex-col gap-2 rounded-lg  w-full items-center bg-blue-200 p-10">
                    <p>Loan Type: {loanType}</p>
                    <p>Account: {account} </p>
                    <p>Amount: {amount}</p>
                    <p>Payments: {paymentChoice}</p>
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
        </div>
        <div className=" w-full lg:w-1/2">
          <img className="rounded-lg" src="/applyLoan.jpg"/>
        </div>
      </div>
    </div>
    </>
  )
}
