import React from 'react'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
import '../index.css'

function Navbar() {
  return (
    <>
    <div className='flex justify-center mt-2.5 p-2.5' >
        <div className='flex bg-slate-900 items-center justify-between  w-[90vw] h-12 p-2.5 rounded-lg '>
          <a>Logo</a>
          <nav className='w-1/3 flex justify-between text-1.5xl'>
            <a>Home</a>
            <a>About Us</a>
            <a>Wishlist</a>
            <button className='bg-red-900 rounded-lg h-8 w-1/6  '>About</button>
          </nav>
        </div>
    </div>
    </>
  )
}

export default Navbar