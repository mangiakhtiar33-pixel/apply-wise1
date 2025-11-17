
import React, { useState } from 'react'

import { Eye, EyeOff } from 'lucide-react' // optional icons from lucide-react
import Star from './Star'
function PasswordInput(props) {
  const [showPassword, setShowPassword] = useState(false)

  return (

    <div className='w-1/1'>
      <label htmlFor={props.htmlfor} className="text-sm/6 font-normal font-Poppins leading-[22px] text-dark flex tracking-normal">
        {props.inputname}<Star />
      </label>
      <div className="relative w-full ">
        <input
          id={props.id}
          type={showPassword ? 'text' : 'password'}
          name="firstName"
          placeholder={props.placeholder}
          required
          autoComplete="given-name"
          className="font-Poppins font-normal block h-[46px] rounded-lg w-1/1 bg-white pl-4 py-3 pr-10 text-dark outline-1 -outline-offset-1 outline-dark/10 placeholder:text-dark/40 focus:outline-1 focus:-outline-offset-1 focus:outline-dark md:text-sm leading-[22px] tracking-normal "

        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute inset-y-0 right-3 flex items-center text-dark/40 cursor-pointer w-6 h-6 self-center"
        >
          {showPassword ? <EyeOff height={18} width={20} /> : <Eye height={18} width={20} />}
        </button>
      </div>
    </div>
  )
}

export default PasswordInput