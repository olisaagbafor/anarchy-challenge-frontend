import { Button } from '@material-tailwind/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const AuthPage = () => {
  return (
    <div className='md:grid grid-cols-12'>

        <div className='col-span-7 bg-blue-900 h-screen'>
            <div className='logo flex gap-x-2 md:p-8'>
                <p className='text-2xl text-pink-200 font-semibold'>ChatGPT</p>
                <div className='w-6 h-6 rounded-full mt-1 bg-pink-200'></div>

                <div className='mt-80 text-pink-200 text-lg md:text-4xl'>
                    Write a thank-you note to my Interviewer
                </div>
            </div>

        </div>
        <div className='col-span-5'>
            <div className='text-center text-xl md:text-3xl mt-72 font-semibold'>
                Get Started
            </div>
            <div className='flex gap-2 md:w-3/4 mx-auto mt-3'>
                <NavLink to="../../auth/login/identifier" className={"w-full"}>
                    <Button className='auth-btn-sign-up' size='lg' fullWidth>Log In</Button>
                </NavLink>
                <NavLink to="../../auth/sign-up" className={"w-full"}>
                    <Button className='auth-btn-sign-up' size='lg' fullWidth>Sign up</Button>
                </NavLink>
            </div>
    </div>

    </div>
  )
}

export default AuthPage