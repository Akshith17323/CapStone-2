import React from 'react'
import '../index.css'
import '../App.css'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate()
  return (
    <div className='flex justify-center mt-2.5 p-2 position-fixed ' >
      <div className=' navbar-expand w-[90vw]' >
          <div className='flex bg-slate-900 items-center justify-between  w-[90vw] h-12 p-2.5 rounded-lg logo-animate'>
            <a>Logo</a>
            <nav className='w-1/3 flex justify-between text-1.5xl text-white'>

              <a id='linkItems' className='nav-animate' >Home</a>
              <a id='linkItems' className='nav-animate' onClick={(e)=>{
                e.preventDefault()
                navigate('/contactUs')
              }
              }>Contact Us</a>
              <a id='linkItems' className='nav-animate' >Wishlist</a>
              <button className='bg-red-900 rounded-lg h-8 w-1/6  '>About Us</button>
            </nav>
          </div>
      </div>
    </div>
  )
}

export default Navbar