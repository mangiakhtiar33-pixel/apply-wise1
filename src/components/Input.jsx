import React from 'react'
import Star from './Star'

function Input(props) {
  return (
    <div className='w-1/1'>
          <label htmlFor={props.htmlfor} className="text-sm/6 font-normal font-Poppins leading-[22px] text-dark flex tracking-normal">
            {props.inputname}<Star />
          </label>
          <div>
            <input
              id={props.id}
              type="text"
              name="firstName"
              placeholder={props.placeholder}
              autoComplete="given-name"
              value={props.value}
              onChange={props.onChange}
              className="font-Poppins font-normal block h-[46px] rounded-lg w-1/1 bg-white px-4 py-3 text-dark outline-1 -outline-offset-1 outline-dark/10 placeholder:text-dark/40 focus:outline-1 focus:-outline-offset-1 focus:outline-dark md:text-sm leading-[22px] tracking-normal"
            />
          </div>
    </div>
  )
}

export default Input

