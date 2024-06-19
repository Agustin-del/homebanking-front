import React, { useState } from 'react';
import { Button } from 'flowbite-react';
import { CardsLanding } from '../components/CardsLanding';
import Footer from '../components/Footer';
import { ModalLogIn } from '../components/ModalLogIn';
import { ModalRegister } from '../components/ModalRegister';
import { useMediaQuery } from 'react-responsive';


export const Index = () => {
    
    const services = ["Secure Online Banking", "Fast transfers", "Customized Loans"]
    const features = ["Security", "Convenience", "Customer support"]
    const [logInOpen, setLogInOpen] = useState(false)
    const[registerOpen, setRegisterOpen] = useState(false)
    const isDesktop = useMediaQuery({minWidth:1024})

    return (
    <div className=" bg-gray-100">
      <header className="bg-white shadow-lg py-4  h-[15vh] lg:h-[17vh] lg:flex justify-between items-center">
        <div className =" justify-center lg:justify-start flex items-center p-4 gap-2">
          <img src="/ico.png" alt="Andes Net Bank Logo" className="h-[50px] lg:h-[70px]" />
          <h1 className="text-3xl font-bold ">Andes Net Bank</h1>
        </div>
          {isDesktop ? <div className="flex gap-4 justify-end p-10">
          <Button onClick={() => setLogInOpen(true)}>Login</Button>
          <Button onClick={() => setRegisterOpen(true)}>Register</Button>
        </div> :
        <div className=" h-[10px] flex gap-6 items-center justify-center  p-10 w-full">
          <Button className="w-[110px] h-[35px] flex items-center" onClick={() => setLogInOpen(true)}>Login</Button>
          <Button className="w-[110px] h-[35px] flex items-center" onClick={() => setRegisterOpen(true)}>Register</Button>
        </div>
        }
      </header>
      <main className="min-h-[75vh] lg:min-h-[71vh] flex flex-1 flex-col justify-evenly px-20 py-[30px] lg:py-0">
        <section className="p-2 w-full">
          <div>
            <h2 className=" text-gray-900 text-center text-xl lg:text-2xl font-bold mb-4">Welcome to Andes Net Bank!</h2>
            <p className="text-sm lg:text-base text-center text-gray-700">We are your trusted bank for all your financial needs. With our online banking solutions, you can access your accounts, make transfers, and more, all from the comfort of your home.</p>
          </div>
        </section>
        <div className="flex flex-col lg:flex-row justify-center gap-4 lg:gap-20 w-full p-2 items-center">
          <CardsLanding title = "Featured Services" features = {services}/>
          <CardsLanding title ="Why choose us?" features ={features}/>
        </div>
      </main>
      <Footer/>
      <ModalLogIn isOpen={logInOpen} onClose={() => setLogInOpen(false)}/>
      <ModalRegister isOpen={registerOpen} onClose ={() => setRegisterOpen(false)}/>
    </div>
  );
}
