import React from 'react'
import Navbar from './Navbar'
import ContactUs from './ContactUs'
function Landing() {
  return (
    <div className='w-screen h-screen flex items-center justify-center'>

      <div className='flex'>

        <div className='w-1/2 h-1/2'></div>

        <div className='w-1/2 h-screen justify-center flex flex-col'>
          <p className='text-2xl  text-white'>With every new key comes a new beginning — a home where memories are made and families grow.Add commentMore actions
              New Key, New Home, New Life — welcome to where your story truly begins.</p>


          <div className="flex gap-4 mt-4">
            <button className="h-10 w-20 px-6 bg-red-900 text-white rounded-lg">Sign Up</button>
            <button className="h-10 w-20 px-6 bg-red-900 text-white rounded-lg">Login</button>
          </div>

        </div>
          
      </div>
    
    
    </div>
  )
}

export default Landing