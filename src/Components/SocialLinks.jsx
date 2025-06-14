import React from 'react'

function SocialLinks() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
        <div>
            wanna contact by other means 
            <div className='flex'>
                <a  href='https://in.pinterest.com/'><img className='w-10 h-10' src='src/assets/Icons/pinterest.png'/></a>
                <a  href='https://github.com/'><img className='w-10 h-10' src='src/assets/Icons/github.png'/></a>
                <a  href='https://www.instagram.com/'><img className='w-10 h-10 ' src='src/assets/Icons/instagram.png'/></a>
                <a  href='https://www.linkedin.com/'><img className='w-10 h-10 ' src='src/assets/Icons/linkedin.png'/></a>
                <a  href='https://x.com/'><img className='w-10 h-10 ' src='src/assets/Icons/x.png'/></a>
            </div>
        </div>
    </div>
  )
}

export default SocialLinks
