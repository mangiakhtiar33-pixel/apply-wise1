import React from 'react'
import Wecome from '../../components/Wecome'
import Input from '../../components/Input'
import PasswordInput from '../../components/PasswordInput'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'
import Rememberme from '../../components/Rememberme'
function Signin() {
  return (
    <div className='block font-Poppins md:flex '>
      <Wecome />
      <div className='md:w-12/20 md:h-1/1'>
        <div className='w-16/20 justify-self-center md:mt-30 mt-8'>
          <h1 className='text-dark font-medium font-Poppins  text-[26px] leading-[34px] tracking-normal'>Hi there👋, good to see you back!</h1>
          <p className='text-sm  text-dark/60 leading-[100%] font-Arial tracking-normal mt-3' >Log in to your account and grab your spot!</p>
          <div className=' mt-7 sm:space-y-6 space-y-4'>
            <Input inputname="Email" placeholder="Enter your Email" />
            <PasswordInput inputname="Password" placeholder="Enter Password here" />
               <div className='flex'>
                <div className="w-1/2"><Rememberme /> </div>   
                <div className='w-1/2 relative'><Link className='text-dark/60 font-Poppins font-normal text-sm leading-[22px] tracking-normal self-center end-0 absolute' to="/forgotpassword">Forgot Password?</Link></div>  
               </div>
          </div>
          <div className='sm:mt-[60px] mt-3'><Button name="Sign in" bg="bg-Secondary"  /></div>
          <div className='text-dark flex justify-center sm:my-[60px] my-3'><p className='font-Poppins font-normal text-[14px] leading-[22px] tracking-normal'>Already have an account? <Link to="/" className='text-Secondary font-Poppins font-medium text-[14px] leading-[22px] tracking-normal'>Sign up</Link></p></div>
        </div>
      </div>
    </div>

  )
}

export default Signin
