import React, { useEffect, useState } from 'react'
import { Label, Select, TextInput, Button } from "flowbite-react";
import { MdAttachMoney } from "react-icons/md";

export const PostLoan = () => {
  const [loanType, setLoanType] = useState('')
  const [payments, setPayments] = useState([])
  const [amount, setAmount] = useState('')
  const [color, setColor] = useState('gray')

  const maxAmounts = {
    Mortgage:500000,
    Personal:100000,
    Automotive:300000 
  }

  useEffect(() => {
    let maxAmount = maxAmounts[loanType] || Infinity
    if (parseFloat(amount) > maxAmount) {
      setColor('failure')
    } else if (!amount) {
      setColor('gray')
    } else {
      setColor('success')
    } 
  }, [amount, loanType])

  useEffect(() => {
    const options = {
      Mortgage: [12, 24, 36, 48, 60],
      Automotive: [6, 12, 24, 36],
      Personal: [6, 12, 24]
    }
    setPayments(options[loanType] || [])
  }, [loanType])

  const handleLoanType = (event => {
    setLoanType(event.target.value)
    setAmount('')
    setColor('gray')
  })

  const handleAmountChange = (event => {
    setAmount(event.target.value)
  })

  return ( 
    <>
      <h1 className="text-3xl font-bold">Apply for a loan</h1>
      <div className="w-full flex gap-8 p-4 justify-center items-center" >
        <div className="flex flex-col gap-4">
          <form className="flex flex-col gap-4 w-1/2">
            <div className="max-w-md">
              <div className="mb-2 block">
                <Label htmlFor="loanType" value="Select loan: " />
              </div>
              <Select id="loanType" className ="w-[350px]" onChange={handleLoanType} required>
                <option>--Select--</option>
                <option>Mortgage</option>
                <option>Automotive</option>
                <option>Personal</option>
              </Select>
            </div>
            <div className="max-w-md">
              <div className="mb-2 block">
                <Label htmlFor="originAccount" value="Origin account: " />
              </div>
              <Select className ="w-[350px]" id="originAccount" required>
                <option>--Select--</option>
              </Select>
            </div>
              <Label htmlFor='amount' value='Amount:' color={color}/>
            <div className="relative">
              <MdAttachMoney className="absolute top-[1px] left-2 h-10 w-8"/> 
              <TextInput id="amount" value ={amount} type="number" color={color} onChange={handleAmountChange} className="pl-10 w-[350px] font-normal text-base" required/>
          </div>
            <div className="max-w-md">
              <div className="mb-2 block">
                <Label htmlFor="payments" value="Payments: " />
              </div>
              <Select className ="w-[350px]" id="payments" required>
                {payments.map((payment) => {
                  return <option key={loanType} value={payment}>
                    {payment}
                  </option>
                })}
              </Select>
            </div>
          </form>      
          <div className="flex justify-center gap-4">
            <Button size="lg" className="w-[100px]">Apply</Button>
            <Button size="lg" className="w-[100px]">Cancel</Button>
          </div>
        </div>
        <div className="w-1/2">
          <img src="/applyLoan.jpg"/>
        </div>
      </div>
    </>
  )
}
