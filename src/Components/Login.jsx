import React from 'react'
// import {auth} from '../firebase'
// import {signInwithEmailandPassword} from '../firebase'
function Login() {
  return (
        <div className='flex justify-center items-center h-[100vh]'>
            <div className='flex justify-center flex-col gap-[3rem] items-center h-72 w-56 bg-black'>
                <h1>Login</h1>
                <div className='flex flex-col gap-1'>
                    <input type="email" placeholder='enter email' className='w-[100%]'/>
                    <input type="password" placeholder='enter password' className='w-[100%]'/>
                    <button className='border mt-4 hover:bg-white hover:text-black'>Login</button>
                </div>
            </div>
        </div>

  )
}

export default Login