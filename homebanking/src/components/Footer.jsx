import React from 'react'

export default function Footer() {
  return (
    <footer className="h-[12vh] bg-blue-400 flex gap-5 justify-end items-center">
        <img className="h-[32px] " src="/public/wsp.png"/>
        <img className="h-[30px]" src="/public/ig.png"/>
        <img className="h-[38px] " src="/public/fb.png"/>
        <p className="p-4 text-sm">&copy; 2024 - All rights reserved</p>
    </footer>
  )
}
