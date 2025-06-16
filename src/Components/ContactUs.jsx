import React from 'react'

import SocialLinks from './SocialLinks'

function ContactUs() {
  return (
    <div className="w-screen h-screen flex  items-center justify-center">

      <form className='flex flex-col w-1/2 h-auto'>
            <div className="flex justify-between gap-4 ">
                <div className="flex flex-col w-1/2">
                  <label htmlFor="firstname">First Name</label>
                  <input type="text" placeholder="Your first name" id="firstname" />
                </div>

                <div className="flex flex-col w-1/2">
                  <label htmlFor="lastname">Last Name</label>
                  <input type="text" placeholder="Your last name" id="lastname" />
                </div>
            </div>

          <label for='mobileNumber' className='mt-6'>Mobile Number :</label>
          <input type='tel' placeholder='Enter your number' id='mobileNumber'/>
          
          <label for='email' className='mt-6'>Email:</label>
          <input type='eamil'placeholder='Enter your email' id='email'/>

          <label for='message' className='mt-6'>Message :</label>
          <textarea type='text' placeholder='Enter your message...'/>


          <button >Reach Me...</button>

          <div className="flex justify-center m-4">
          <SocialLinks />
          </div>

      </form>

      
      
    </div>
  )
}

export default ContactUs

