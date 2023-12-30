import { Typography, Input, Button } from '@material-tailwind/react';
import {Helmet} from 'react-helmet';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';

const SignUp = () => {
  return (
    
    <div>

        <Helmet>
            <title>ChatGPT! Sign Up</title>
            <meta name="description" content="All for the interview 1 first phase" />
        </Helmet>


        <div className='w-fit mx-auto mt-8 mb-44'>
        <img src={logo} className='w-8 mx-auto '/>
          
        </div>

        <div className='mt-16 w-1/5 mx-auto'>
            <Typography className='text-2xl md:text-3xl font-semibold mb-5'>Welcome</Typography>

            <form>
                <div className='form-input mt-6'>
                    <Input type='email' variant='outlined' size='lg' label='Email address'/>
                </div>
                <div className='mt-4'>
                    <Button type='submit' fullWidth size='lg' className='auth-login'>Continue</Button>
                </div>
            </form>
            <div className='text-center my-6'>
               Already have an account? <NavLink to="/auth/login" className={"auth-text"}>Sign in</NavLink>
            </div>

            <fieldset className='border-t mb-3 border-gray-400 text-center'>
                <legend className='text-center'>OR</legend>
            </fieldset>
            <div className='github-btn'>
                <Button fullWidth variant='text' className='border border-gray-300 flex gap-x-3 justify-center capitalize text-gray-800 font-normal' size='lg'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                        </svg>
                    </div>
                   <div className='-mt-0.5'>
                     Continue with Github
                   </div>
                </Button>
            </div>
            <div className='google-btn mt-6'>
                <Button fullWidth variant='text' className='border flex gap-x-3 justify-center border-gray-300 capitalize text-gray-800 font-normal' size='lg'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                            <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
                        </svg>
                    </div>
                    <div className='-mt-0.5'>Continue with Google</div>
                </Button>
            </div>
        </div>

        
    </div>
  )
}

export default SignUp