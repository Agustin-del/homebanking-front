import { Card } from 'flowbite-react'
import React from 'react'

export const CardsLanding = ({title, features}) => {
  return (
    <section className="bg-blue-200 p-4 w-[250px] h-[140px] lg:h-[200px] flex flex-col items-center justify-center rounded-lg">
      <h2 className="text-xl lg:text-2xl text-gray -900 font-bold mb-4">{title}:</h2>
      <ul className="text-sm lg:text-base list-disc list-inside text-gray-700">
            {features.map((feature, index) => {
                return <li key={index}>{feature}</li>
            })}
      </ul>
    </section>
  )
}
