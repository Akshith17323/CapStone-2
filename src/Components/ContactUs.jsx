import React from 'react'

import SocialLinks from './SocialLinks'

function ContactUs() {
  return (
    <div className="w-screen h-screen flex flex-col items-center ">
      <form className='flex flex-col w-1/3 min-h-[500px] bg-slate-900 m-5 rounded-lg items-center'>
            
          <label for="firstname" className="mt-6">Name</label>
          <input type="text" placeholder="Your name" id="firstname"  className='border-sky-300 rounded-lg'/>
          

          <label for='mobileNumber' className='mt-6'>Mobile Number :</label>
          <input type='tel' placeholder='Enter your number' id='mobileNumber' className='border-sky-300 rounded-lg'/>
          
          <label for='email' className='mt-6'>Email:</label>
          <input type='eamil'placeholder='Enter your email' id='email' className='border-sky-300 rounded-lg'/>

          <label for='message' className='mt-6'>Message :</label>
          <input type='text' placeholder='Enter your message...' className='border-sky-300 rounded-lg'/>

          <button className=''
          >Reach me</button>

      </form>

      <div className="flex justify-center m-4">
          <SocialLinks />
      </div>
      
    </div>
  )
}

export default ContactUs

