import React from 'react'
import { Carousel } from 'flowbite-react'

export const Carrousel = () => {
  return (
    <div className='w-full h-[200px]'>
      <Carousel>
        <img src="/foto1.jpg"/>
        <img src="/foto2.jpg"/>
        <img src="/foto3.jpg"/>
      </Carousel>
    </div>
    )
}
