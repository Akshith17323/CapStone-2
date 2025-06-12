import React from 'react'

import SocialLinks from './SocialLinks'

function ContactUs() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100">

      <form className='flex flex-col w-1/3 h-1/2 '>
          <div className='flex w-'>
            <label for="firstname" >First Name :</label>
            <input type='text' placeholder='Enter your first name' id="firstname"/>

            <label for="lastname" >Last Name :</label>
            <input type='text' placeholder='Enter your last name' id="lastname"/>
          </div>

          <label for='mobileNumber'>Mobile Number :</label>
          <input type='tel' placeholder='Enter your number' id='mobileNumber'/>
          
          <label for='email'>Email:</label>
          <input type='eamil'placeholder='Enter your email' id='email'/>

          <label for='message'>Message :</label>
          <textarea type='text' placeholder='Enter your message...'/>


          <button >Reach Me...</button>

      </form>

      <SocialLinks/>
      
    </div>
  )
}

export default ContactUs