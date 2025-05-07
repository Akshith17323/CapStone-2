import React from 'react'
import Navbar from './Navbar'
import ContactUs from './ContactUs'
import { useNavigate } from 'react-router-dom'

function Landing() {
  const navigate = useNavigate()
  return (
    <>
      <div className='flex items-center justify-between h-[100vh]'>
        <div className='w-10/100'></div>
        <div className='bg-stone-50 w-1/100 h-[40vh] border rounded-xs'></div>
        <div className='w-60/100 flex justify-center flex-col'>
          <p className='text-2xl '>With every new key comes a new beginning — a home where memories are made and families grow.
            New Key, New Home, New Life — welcome to where your story truly begins.</p>
          <div className='flex justify-center'>
            <button className = "border w-1/10 rounded-lg bg-blue-900 text-lg mt-[5vh]"onClick={(e)=>{e.preventDefault() 
            navigate('/login')
            }}>Login </button>
            <div className='w-1/50'></div>
            <button className = "border w-1/10 rounded-lg bg-blue-900 text-lg mt-[5vh]"onClick={(e)=>{e.preventDefault() 
            navigate('/signup')
            }}>Sign Up</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default Landing