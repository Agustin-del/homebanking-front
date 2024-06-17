import React, { useState } from 'react';
import { Button } from 'flowbite-react';
import { CardsLanding } from '../components/CardsLanding';
import Footer from '../components/Footer';


export const IndexAuthenticated = ({handleLogOut}) => {
    
    const services = ["Secure Online Banking", "Fast transfers", "Customized Loans"]
    const features = ["Security", "Convenience", "Customer support"]

    return (
    <div className=" bg-gray-100 ">
      <header className=" h-[17vh] flex justify-between items-center">
          <div className ="flex items-center p-4 gap-2 justify-center w-full bg-blue-100">
            <img src="/ico.png" alt="Andes Net Bank Logo" className="h-[70px]" />
            <h1 className="text-3xl font-bold ">Andes Net Bank</h1>
          </div>
      </header>
      <main className="min-h-[71vh] flex flex-col justify-evenly px-20">
        <section className="p-2 w-full">
          <div>
            <h2 className=" text-gray-900 text-center text-2xl font-bold mb-4">Welcome!</h2>
            <p className="text-center text-gray-700">We are your trusted bank for all your financial needs. With our online banking solutions, you can access your accounts, make transfers, and more, all from the comfort of your home.</p>
          </div>
        </section>
        <div className="flex justify-center gap-20 w-full p-2">
          <CardsLanding title = "Featured Services" features = {services}/>
          <CardsLanding title ="Why choose us?" features ={features}/>
        </div>
      </main>
    </div>
  );
}
