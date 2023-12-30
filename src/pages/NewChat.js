import { Input, Textarea, IconButton} from '@material-tailwind/react'
import React from 'react'
import logo from '../assets/logo.svg'

const NewChat = () => {
  return (
    <div className='px-10 py-12'>
        <div className='w-fit mx-auto md:mt-32'>
            <img src={logo} className='w-16 mx-auto'/>
            <p className='text-2xl text-left'>How can I help you today?</p>
        </div>

        <div className='md:w-4/5 mx-auto mt-14'>
            <div className='md:grid grid-cols-12 gap-4'>
                <div className='border border-gray-300 rounded-lg p-3 col-span-6'>
                    <p className='text-xl font-semibold'>Tell me a fun fact</p>
                    <p>about the Roman empire</p>
                </div>
                <div className='border border-gray-300 rounded-lg p-3 col-span-6'>
                    <p className='text-xl font-semibold'>Brainstorm names</p>
                    <p>for an orange cat, we are adopting from the shelter</p>
                </div>
                <div className='border border-gray-300 rounded-lg p-3 col-span-6'>
                    <p className='text-xl font-semibold'>Write a thank-you note</p>
                    <p>To a guess speaker for my class</p>
                </div>
                <div className='border border-gray-300 rounded-lg p-3 col-span-6'>
                    <p className='text-xl font-semibold'>Recommend a dish</p>
                    <p>To bring to a potluck</p>
                </div>
                <div className=' p-3 col-span-12 mt-10'>
                    <form>
                    <Textarea placeholder='Message ChatGPT'></Textarea>
                    <div className='absolute right-0 top-7'>
                        <IconButton className='' variant='text'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"/>
                        </svg>
                        </IconButton>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewChat