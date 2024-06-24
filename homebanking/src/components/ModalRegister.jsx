import React, { useEffect, useRef, useState } from 'react';
import { Button, Label, Modal, TextInput, Alert } from 'flowbite-react';
import { HiInformationCircle } from 'react-icons/hi';
import axios from 'axios';

//cómo hago para que no tenga scroll, no tiene ni gap las cosas

export function ModalRegister({ isOpen, onClose }) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [alert, setAlert] = useState(null)
  const [passwordAlert, setPasswordAlert] = useState('')
  const [registerButton, setRegisterButton] = useState(false)
  const firstNameRef = useRef(null)

  useEffect (() => {
    if (isOpen) {
      setTimeout(() => {
        if(firstNameRef) {
          firstNameRef.current.focus()
        }
      }, 100)
    }
  }, [])

  useEffect(() => {
    
    const validatePassword = (password) => {
      const passwordPattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!?@#$%^&+=])(?=\S+$).{8,}$/
      const requirements = [
        { regex:/[a-z]/, message: "At least one lowercase letter"},
        {regex: /[A-Z]/, message: "At least one uppercase letter"},
        {regex: /[0-9]/, message: "At least one number"},
        {regex: /[!?@#$%^&+=]/, message: "At least one special character (@#$%^&+=)"},
        {regex: /.{8,}/, message: "At least eight characters"}
      ]
      const unmetRequirements = requirements.filter(req => !req.regex.test(password)).map(req => req.message)

      if (unmetRequirements.length > 0) {
        setPasswordAlert(`Password must have: ${unmetRequirements.join(', ')}`)
      } else if (password !== confirmPassword && confirmPassword !== "") {
          setPasswordAlert('Passwords do not match')
      } else {
        setPasswordAlert('')
      }
    }
    validatePassword(password)
  }, [password, confirmPassword])
  
  async function handleRegister() {
    setRegisterButton(true)
    if(password !== confirmPassword) {
      setAlert({type: "error", message: "Passwords do not match"})
      setTimeout(() => {
        setAlert(null)
        setRegisterButton(false)
      }, 2000);
      return
    }
    try {
      const requestBody = {
        firstName:firstName,
        lastName:lastName,
        email:email,
        password:password
      }
      const response = await axios.post('https://homebanking-e3f1.onrender.com/api/auth/signup', requestBody)
      if (response.status === 201) {
        setAlert({type:"success", message:"Your account has been created, now login"})
        setTimeout(() => {
          setRegisterButton(false)
          onClose();
        }, 2000);
      }
    } catch(error) {
      if(error.response && error.response.data) {
        setAlert({type:'error', message:error.response.data})
        setTimeout(() => {
          setAlert(null)
          setRegisterButton(false)
        }, 1000)
      } else {
        setAlert({type:'error', message: 'An unexpected error has ocurred'})
        setTimeout(() => {
          setAlert(null)
          setRegisterButton(false)
        }, 1000)
      }
    }
  }
  useEffect(() => {
    if (!isOpen) {
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setAlert(null);
      setPasswordAlert('');
    }
  }, [isOpen]);
  
  return (
    <Modal show={isOpen} size="md" onClose={onClose} popup>
      <Modal.Header/>
      <Modal.Body>
        <div className="space-y-6 flex flex-col gap-2">
          <div className="flex items-center w-[85%] justify-between">
            <h3 className="text-xl font-medium text-gray-900">Create your account</h3>
            <img src="/ico.png" className="h-[55px]"  />
          </div>
          <div>
            <div className="block">
              <Label htmlFor="firstName" value="First name" />
            </div>
            <TextInput
              id="firstName"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              ref={firstNameRef}
              required
            />
          </div>
          <div>
            <div className="block">
              <Label htmlFor="lastName" value="Last name" />
            </div>
            <TextInput
              id="lastName"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Your email" />
            </div>
            <TextInput
              id="email"
              placeholder="name@company.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Your password" />
            </div>
            <TextInput
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
            <div className="mb-2 block">
              <Label htmlFor="confirmPassword" value="Confirm your password" />
            </div>
            <TextInput
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              required
            />
          </div>
          <div className="flex justify-center">
            {passwordAlert && (
              <Alert color='warning' icon={HiInformationCircle}>
                <span>{passwordAlert}</span>
              </Alert>
            )}
          </div>
          <div className="flex justify-center">
            {alert && (
              <Alert color={alert.type === 'error' ? 'failure' : alert.type} icon={HiInformationCircle}>
                <span>{alert.message}</span>
              </Alert>
            )}
          </div>
          <div className="w-full flex justify-center">
            <Button onClick={handleRegister} disabled={registerButton}>Create your account</Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}