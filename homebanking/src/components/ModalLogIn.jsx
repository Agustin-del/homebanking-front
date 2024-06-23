import React, { useEffect, useRef, useState } from 'react';
import { Button, Label, Modal, TextInput } from 'flowbite-react';
import axios from 'axios';
import { Alert } from 'flowbite-react';
import { HiInformationCircle } from 'react-icons/hi';
import {useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/authActions';

//fijarse el manejo de las mayúsculas
export function ModalLogIn({ isOpen, onClose }) {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const[alert, setAlert] = useState(null)
  const [loginButton, setLoginButton] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        if (emailRef.current) {
        emailRef.current.focus()
        }
      }, 100)
    }
  }, [isOpen])

  async function handleLogIn() {
    setLoginButton(true)
    try {
      const requestBody = {
        email:emailRef.current.value,
        password:passwordRef.current.value
      }
  
      const response = await axios.post('https://homebanking-e3f1.onrender.com/api/auth/login', requestBody)

      if (response.status === 200) {
        const token = response.data
        setAlert({type: 'success', message:'Login successful'})
        setTimeout(() => {
          setLoginButton(false)
          dispatch(login(token))
          navigate('/accounts')
        }, 2000);
      } 

    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          setAlert({type:'failure', message:'Invalid email or password'})
          setTimeout(() => {
            setAlert(null)
            setLoginButton(false)
          }, 1500);
        } else if (error.response.status === 404){
          setAlert({type:'failure', message:'User not found'})
          setTimeout(() => {
            setAlert(null)
            setLoginButton(false)
          }, 1500)
        } else {
          setAlert({type:'failure', message:'An error ocurred: ' + error.response.data})
          setTimeout(()=> {
            setAlert(null)
            setLoginButton(false)
          }, 1500)
        }
      } else if(error.request) {
        setAlert({type:'failure', message:'No response received from the server'})
        setTimeout(() => {
          setAlert(null)
          setLoginButton(false)
        }, 1500)
      } else {
        setAlert({type:'failure', message:'An error ocurred: ' + error.message})
        setTimeout(()=> {
          setAlert(null)
          setLoginButton(false)
        }, 1500)
      }
    }
  }

  return (
    <Modal show={isOpen} size="md" onClose={onClose} popup>
      <Modal.Header />
      <Modal.Body>
        <div className="space-y-6">
          <div className="flex items-center w-[85%] justify-between">
            <h3 className="text-xl font-medium text-gray-900">Login to your account</h3>
            <img src="/ico.png"  className="h-[55px]"/>
          </div>
          <div>
           <div className="mb-2 block">
              <Label htmlFor="email" value="Your email" />
            </div>
            <TextInput
              id="email"
              placeholder="name@company.com"
              ref={emailRef}
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
              ref={passwordRef}
              required
              />
          </div>
          <div className="flex justify-end">
            <a href="#" className="text-sm text-cyan-700 hover:underline dark:text-cyan-500">
              Lost Password?
            </a>
          </div>
          <div className ="flex justify-center">
            {alert && (
              <Alert color={alert.type} icon={HiInformationCircle}><span>{alert.message}</span></Alert>
            )}
          </div>
          <div className="w-full flex justify-center">
            <Button onClick={handleLogIn} disabled={loginButton}>Log in to your account</Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}