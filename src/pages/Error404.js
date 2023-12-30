import React from 'react'
import pageNotFound from '../assets/page_not_found.svg'
import { Typography } from '@material-tailwind/react'
import { NavLink } from 'react-router-dom'
const Error404 = () => {
  return (
    <div>

        <div className='mt-16 md:mt-20'>
          <img alt='page_not_found' src={pageNotFound} className='w-1/5 mx-auto'/>

          <Typography className='text-2xl md:text-3xl text-center mt-5'>Page Not Found!, Whoops! But you can <NavLink className={"text-green-600"} to={"/"}>ChatGPT</NavLink></Typography>
        </div>
    </div>
  )
}

export default Error404