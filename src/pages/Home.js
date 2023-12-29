import { Input, Textarea, IconButton } from '@material-tailwind/react'
import React from 'react'

const Home = () => {
  return (
    <div className='mt-14 p-8 md:p-8 w-full'>
      <div className='md:w-3/5 md:p-10 p-6 mx-auto bg-gray-100 overflow-y-auto'>
      <div className='flex justify-start gap-2'>
        <div className='logo'>
          <img src={require("../assets/favicon.png")} className='w-9 rounded-lg'/>
        </div>
        <div>
          <p className='font-semibold text-lg mb-0'>You</p>
          <div className='name-title'>Best business description for a software development company </div>
        </div>
      </div>

      <div className='mt-8'>
        <div className='flex justify-start gap-2'>
          <div className='logo'>
            <img src={require("../assets/favicon.png")} className='w-24 rounded-full'/>
          </div>
          <div>
            <p className='font-semibold text-lg mb-0'>ChatGPT</p>
            <div className='name-title'>
            "Transforming ideas into innovative solutions, our software development company specializes in crafting cutting-edge applications tailored to meet diverse business needs. With a focus on quality code, seamless user experiences, and scalable architecture, we bring your digital vision to life."
            </div>
          </div>
        </div>

      </div>

      </div>
      <div className='absolute left-80 right-36  bottom-10 pt-6 pb-2'>
        <form className=''>
          <Textarea placeholder='Message ChatGPT'></Textarea>
          <div className='absolute right-0 top-7'>
            <IconButton className='' variant='text'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"/>
              </svg>
            </IconButton>
          </div>

          <p className='text-sm text-gray-700 text-center mt-2'>ChatGPT can make mistakes. Consider checking important information.</p>
        </form>
      </div>
    </div>
  )
}

export default Home