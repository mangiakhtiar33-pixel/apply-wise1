import React from 'react'
import Wecome from '../../components/Wecome'
import Input from '../../components/Input'
import PasswordInput from '../../components/PasswordInput'
import Privacy from '../../components/Privacy'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='block font-Poppins md:flex'>
      <Wecome/>
      <div className='md:w-12/20 md:h-1/1'>
        <div className='w-16/20 justify-self-center md:mt-30 mt-8'>
          <h1 className='text-dark font-medium font-Poppins  text-[26px] leading-[34px] tracking-normal'>Please fill out some more information</h1>
          <p className='text-sm  text-dark/60 leading-[100%] font-Arial tracking-normal mt-3' >Your information is the first step towards a personalized journey.</p>
          <div className=' mt-8 sm:space-y-6 space-y-4'>
            <div className='sm:flex w-2/2 sm:space-x-5 md:space-y-0 space-y-4'>
              <div className='w-2/2 '>
                <Input inputname="First Name" placeholder="Enter your First Name" />
                <label htmlFor="firstName" className="text-[12px] font-normal font-Poppins text-dark/70 flex leading-5  mt-1">
                  As per your passport or ID proof
                </label>
              </div>
              <Input inputname="Last Name" placeholder="Enter your Last Name" />
            </div>
            <div className='sm:flex w-2/2 sm:space-x-5 md:space-y-0 space-y-4'>
              <Input inputname="Email" placeholder="Enter your Email" />
              <Input inputname="Phone" placeholder="" />
            </div>
            <Input inputname="Nationality" placeholder="Select" />
            <PasswordInput inputname="Password" placeholder="Enter Password here" />
            <PasswordInput inputname="Confirm Password*" placeholder="Enter Password here" />
            <Privacy />
            <div className='sm:mt-[60px]'><Button name="Continue" bg="bg-Secondary" /></div>
            <div className='text-dark flex justify-center sm:my-[50px] my-5'><p className='font-Poppins font-normal text-[14px] leading-[22px] tracking-normal'>Already have an account? <Link to="/signin" className='text-Secondary font-Poppins font-medium text-[14px] leading-[22px] tracking-normal'>Sign in</Link></p></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
